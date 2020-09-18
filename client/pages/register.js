import Layout from "../components/layout.component";
import { useState } from "react";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register",
  });

  const { name, email, password, eror, success, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Register",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
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
        {registerForm()}
        <hr />
        {JSON.stringify(state)}
      </div>
    </Layout>
  );
};

export default Register;
