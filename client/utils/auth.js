import cookie from "js-cookie";
import Router from "next/router";

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key);
  }
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

export const getCookieFromBrowser = (key) => {
  console.log("BROWSER: ", key);
  return cookie.get(key);
};

export const getCookieFromServer = (key, req) => {
  console.log("req: ", req);
  if (!req.headers.cookie) {
    return undefined;
  }
  let token = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!token) {
    return undefined;
  }
  let tokenValue = token.split("=")[1];
  console.log("token value:", tokenValue);
  return tokenValue;
};

export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

export const authenticate = (response, callback) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  callback();
};

export const isAuthenticate = () => {
  if (process.browser) {
    const cookieChecked = getCookieFromBrowser("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      }
    }
  }
  return false;
};

export const logout = () => {
  removeCookie("token");
  removeLocalStorage("user");
  Router.push("/login");
};
