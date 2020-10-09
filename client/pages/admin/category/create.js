import dynamic from "next/dynamic";
import Layout from "../../../components/layout.component";
import withAdmin from "../../withAdmin";
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../../config";
import { showSuccessMessage, showErrorMessage } from "../../../utils/alerts";
import Resizer from "react-image-file-resizer";
import 'react-quill/dist/quill.bubble.css'

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Create = ({ user, token }) => {
  const [state, setState] = useState({
    name: "",
    error: "",
    success: "",
    buttonText: "Create",
    imageUploadText: "Upload image",
    image: "",
  });

  const [content, setContent] = useState("");

  const {
    name,
    success,
    error,
    buttonText,
    imageUploadText,
    image,
  } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
    });
  };

  const handleContent = (e) => {
    console.log(e);
    setContent(e);
    setState({
      ...state,
      success: "",
      error: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({
      ...state,
      buttonText: "Creating",
    });
    try {
      const response = await axios.post(
        `${API}/category`,
        { name, content, image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(`response category`, response);
      setState({
        ...state,
        name: "",
        buttonText: "Created",
        imageUploadText: "Upload image",
      });
    } catch (error) {
      console.log(`response category error`, error);
      setState({
        ...state,
        buttonText: "Create",
        error: error.res,
      });
    }
  };

  const handleImage = (e) => {
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      Resizer.imageFileResizer(
        e.target.files[0],
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          setState({
            ...state,
            image: uri,
          });
        },
        "base64"
      );
    }
  };

  const createCategoryForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-mited">Name</label>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="form-group">
        <label className="text-mited">Content</label>
        <ReactQuill
          value={content}
          onChange={handleContent}
          placeholder="Write something"
          className="pb-5 mb-3"
          theme='bubble'
          style={{ border: "1px solid #666" }}
        />
      </div>
      <div className="form-group">
        <label className="btn btn-outline-secondary">
          {imageUploadText}
          <input
            onChange={handleImage}
            type="file"
            className="form-control"
            accept="image/*"
            hidden
          ></input>
        </label>
      </div>
      <div>
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Create category</h1>
          <br />
          {createCategoryForm()}
        </div>
      </div>
    </Layout>
  );
};

export default withAdmin(Create);
