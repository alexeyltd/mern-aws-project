import Layout from "../components/layout.component";
import { useState, useEffect } from "react";
import axios from "axios";
import { showSuccessMessage, showErrorMessage } from "../utils/alerts";
import { API } from "../config";
import Link from "next/link";
import Router from "next/router";
import { authenticate, isAuthenticate } from "../utils/auth";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Login",
  });

  useEffect(() => {
    isAuthenticate() && Router.push("/");
  }, []);

  const { email, password, error, success, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Login",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({
      ...state,
      buttonText: "Logging in",
    });
    try {
      const response = await axios.post(`${API}/login`, {
        email,
        password,
      });
      authenticate(response, () => {
        return isAuthenticate() && isAuthenticate().role === "admin"
          ? Router.push("/admin")
          : Router.push("/user");
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: "Login",
        error: error.data.message,
      });
    }
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
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
        <h1>Login</h1>
        {JSON.stringify(isAuthenticate())}
        <br />
        {success && showSuccessMessage(success)}
        {error && showErrorMessage(error)}
        {loginForm()}
        <Link href="/auth/password/forgot">
          <a className="text-danger float-right">Forgot password</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
