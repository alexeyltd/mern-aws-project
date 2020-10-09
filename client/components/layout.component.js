import Head from "next/head";
import Link from "next/Link";
import nProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
import { isAuthenticate, logout } from "../utils/auth";

Router.onRouteChangeStart = (url) => nProgress.start();
Router.onRouteChangeComplete = (url) => nProgress.done();
Router.onRouteChangeError = (url) => nProgress.done();

const Layout = ({ children }) => {
  const head = () => (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="/static/css/styles.css" />
    </React.Fragment>
  );

  const nave = () => (
    <ul className="nav nav-tabs bg-warning">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-dark">HOME</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/user/link/create">
          <a
            className="nav-link text-dark btn btn-success"
            style={{ borderRadius: "0px" }}
          >
            Submit a link
          </a>
        </Link>
      </li>
      {!isAuthenticate() && (
        <React.Fragment>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link text-dark">Login</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <a className="nav-link text-dark">Register</a>
            </Link>
          </li>
        </React.Fragment>
      )}
      {isAuthenticate() && isAuthenticate().role === "admin" && (
        <li className="nav-item ml-auto">
          <Link href="/admin">
            <a className="nav-link text-dark">{isAuthenticate().name}</a>
          </Link>
        </li>
      )}
      {isAuthenticate() && isAuthenticate().role === "subscriber" && (
        <li className="nav-item ml-auto">
          <Link href="/user">
            <a className="nav-link text-dark">{isAuthenticate().name}</a>
          </Link>
        </li>
      )}
      {isAuthenticate() && (
        <li className="nav-item">
          <a onClick={logout} className="nav-link text-dark">
            Logout
          </a>
        </li>
      )}
    </ul>
  );

  return (
    <React.Fragment>
      {head()}
      {nave()} <div className="container pt-5 pb-5">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
