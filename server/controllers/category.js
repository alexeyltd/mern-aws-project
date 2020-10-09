const Category = require("../models/category");
const Link = require("../models/link");
const slugify = require("slugify");
const formidable = require("formidable");
const AWS = require("aws-sdk");
const { uuid } = require("uuidv4");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACESS_KEY,
  region: process.env.AWS_REGION,
});

exports.create = (req, res) => {
  const { name, image, content } = req.body;
  // image data
  const base64Data = new Buffer.from(
    image.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );
  const type = image.split(";")[0].split("/")[1];

  const slug = slugify(name);
  let category = new Category({ name, content, slug });

  const params = {
    Bucket: "hackr-alex",
    Key: `category/${uuid()}.${type}`,
    Body: base64Data,
    ACL: "public-read",
    ContentEncoding: "base64",
    ContentType: `image/${type}`,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error: "Upload to s3 failed" });
    }
    console.log("AWS UPLOAD RES DATA", data);
    category.image.url = data.Location;
    category.image.key = data.Key;

    category.postedBy = req.user._id;

    // save to db
    category.save((err, success) => {
      if (err) {
        console.log(err);
        res.status(400).json({ error: "Duplicate category" });
      }
      return res.json(success);
    });
  });
};

exports.list = (req, res) => {
  Category.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Category get list failed",
      });
    }
    res.json(data);
  });
};

exports.read = (req, res) => {
  const { slug, limit, skip } = req.params;
  let limitNumber = limit ? parseInt(limit) : 10;
  let skipNumber = skip ? parseInt(skip) : 0;

  Category.findOne({ slug })
    .populate("postedBy", "_id name username")
    .exec((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "Could not load category",
        });
      }
      Link.find({ categories: category })
        .populate("postedBy", "_id, name username")
        .populate("categories", "name")
        .sort({ createdAt: -1 })
        .limit(limitNumber)
        .skip(skipNumber)
        .exec((err, links) => {
          if (err) {
            return res.status(400).json({
              error: "Could not load links",
            });
          }
          res.json({ category, links });
        });
    });
};

exports.update = (req, res) => {};

exports.remove = (req, res) => {};
