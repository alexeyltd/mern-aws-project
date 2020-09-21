import Layout from "../components/layout.component";
import { useState, useEffect } from "react";
import axios from "axios";
import { showSuccessMessage, showErrorMessage } from "../utils/alerts";
import { API } from "../config";
import { isAuthenticate } from "../utils/auth";
import Router from "next/router";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register",
  });

  useEffect(() => {
    isAuthenticate() && Router.push("/");
  }, []);

  const { name, email, password, error, success, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Register",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    setState({
      ...state,
      buttonText: "Registering",
    });
    try {
      const response = await axios.post(`${API}/register`, {
        name,
        email,
        password,
      });
      console.log(response);
      setState({
        ...state,
        name: "",
        email: "",
        password: "",
        buttonText: "Submitted",
        success: response.data.message,
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: "Register",
        error: error.data.message,
      });
    }
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          value={name}
          type="text"
          className="form-control"
          placeholder="Type your name"
          onChange={handleChange("name")}
        />
      </div>
      <div className="form-group">
        <input
          value={email}
          type="text"
          className="form-control"
          placeholder="Type your email"
          onChange={handleChange("email")}
        />
      </div>
      <div className="form-group">
        <input
          valu={password}
          type="password"
          className="form-control"
          placeholder="Type your password"
          onChange={handleChange("password")}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning">{state.buttonText}</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md6 offset-md-3">
        <h1>Register</h1>
        <br />
        {success && showSuccessMessage(success)}
        {error && showErrorMessage(error)}
        {registerForm()}
      </div>
    </Layout>
  );
};

export default Register;
