const Category = require("../models/category");
const slugify = require("slugify");
const formidable = require("formidable");
const AWS = require("aws-sdk");
const uuid = require("uuid");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACESS_KEY,
  region: process.env.AWS_REGION,
});

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not upload",
      });
    }
     
  });

  const { name, image, content } = req.body;
  const slug = slugify(name);
  const imageObject = {
    url: `https://via.placeholder.com/350x150.png?text=${process.env.CLIENT_URL}`,
    key: "",
  };

  const category = new Category({ name, slug, image });
  category.postedBy = req.user._id;

  category.save((err, data) => {
    if (err) {
      console.log("Category create err", err);
      return res.status(400).json({
        error: "Category create failed",
      });
    }
    return res.json(data);
  });
};

exports.list = (req, res) => {};

exports.read = (req, res) => {};

exports.update = (req, res) => {};

exports.remove = (req, res) => {};
