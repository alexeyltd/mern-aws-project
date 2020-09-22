import Router, { withRouter } from "next/router";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import { showSuccessMessage, showErrorMessage } from "../../../../utils/alerts";
import { API } from "../../../../config";
import Layout from "../../../../components/layout.component";

const ResetPassword = ({ router }) => {
  const [state, setState] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset password",
    success: "",
    error: "",
  });

  const { name, token, newPassword, buttonText, success, error } = state;

  useEffect(() => {
    const decode = jwt.decode(router.query.id);
    if (decode) {
      setState({
        ...state,
        name: decode.name,
        token: router.query.id,
      });
    }
  }, [router]);

  const handleChange = (e) => {
    setState({
      ...state,
      newPassword: e.target.value,
      success: "",
      error: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Sending" });
    try {
      const response = await axios.patch(`${API}/reset-password`, {
        resetPasswordLink: token,
        newPassword,
      });
      setState({
        ...state,
        newPassword: "",
        buttonText: "Done",
        success: response.data.message,
      });
    } catch (error) {
      setState({
        ...state,
        buttonText: 'Forgot Password',
        error: error.response.data.error,
      });
    }
  };

  const passwordResetForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          onChange={handleChange}
          value={newPassword}
          placeholder="Type your password"
          required
        />
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
          <h1>Hi, {name}, ready to reset password?</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          {passwordResetForm()}
        </div>
      </div>
    </Layout>
  );
};
export default withRouter(ResetPassword);
