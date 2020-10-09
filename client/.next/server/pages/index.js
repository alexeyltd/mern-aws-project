module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.component.js":
/*!****************************************!*\
  !*** ./components/layout.component.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\nvar _jsxFileName = \"/Users/a.pavlenko/Documents/work-projects/react-aws-project/client/components/layout.component.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = url => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();\n\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = url => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();\n\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = url => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();\n\nconst Layout = ({\n  children\n}) => {\n  const head = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\",\n    integrity: \"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\",\n    crossorigin: \"anonymous\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"/static/css/styles.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }));\n\n  const nave = () => __jsx(\"ul\", {\n    className: \"nav nav-tabs bg-warning\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link text-dark\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, \"HOME\"))), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/user/link/create\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link text-dark btn btn-success\",\n    style: {\n      borderRadius: \"0px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"Submit a link\"))), !Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"isAuthenticate\"])() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/login\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link text-dark\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, \"Login\"))), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/register\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link text-dark\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, \"Register\")))), Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"isAuthenticate\"])() && Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"isAuthenticate\"])().role === \"admin\" && __jsx(\"li\", {\n    className: \"nav-item ml-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/admin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link text-dark\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"isAuthenticate\"])().name))), Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"isAuthenticate\"])() && Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"isAuthenticate\"])().role === \"subscriber\" && __jsx(\"li\", {\n    className: \"nav-item ml-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/user\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link text-dark\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"isAuthenticate\"])().name))), Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"isAuthenticate\"])() && __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    onClick: _utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"logout\"],\n    className: \"nav-link text-dark\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, \"Logout\")));\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, head(), nave(), \" \", __jsx(\"div\", {\n    className: \"container pt-5 pb-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 16\n    }\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5jb21wb25lbnQuanM/N2E1YSJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJ1cmwiLCJuUHJvZ3Jlc3MiLCJzdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImhlYWQiLCJuYXZlIiwiYm9yZGVyUmFkaXVzIiwiaXNBdXRoZW50aWNhdGUiLCJyb2xlIiwibmFtZSIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTZCQyxHQUFELElBQVNDLGdEQUFTLENBQUNDLEtBQVYsRUFBckM7O0FBQ0FKLGtEQUFNLENBQUNLLHFCQUFQLEdBQWdDSCxHQUFELElBQVNDLGdEQUFTLENBQUNHLElBQVYsRUFBeEM7O0FBQ0FOLGtEQUFNLENBQUNPLGtCQUFQLEdBQTZCTCxHQUFELElBQVNDLGdEQUFTLENBQUNHLElBQVYsRUFBckM7O0FBRUEsTUFBTUUsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQy9CLFFBQU1DLElBQUksR0FBRyxNQUNYLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsUUFBSSxFQUFDLDBFQUZQO0FBR0UsYUFBUyxFQUFDLHlFQUhaO0FBSUUsZUFBVyxFQUFDLFdBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsd0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGOztBQVlBLFFB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RCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixJQUFJLEVBRFAsRUFFR0MsSUFBSSxFQUZQLE9BRVc7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ0YsUUFBdEMsQ0FGWCxDQURGO0FBTUQsQ0ExRUQ7O0FBNEVlRCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0LmNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBcIm5wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZSwgbG9nb3V0IH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhcIjtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IG5Qcm9ncmVzcy5zdGFydCgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICh1cmwpID0+IG5Qcm9ncmVzcy5kb25lKCk7XG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKHVybCkgPT4gblByb2dyZXNzLmRvbmUoKTtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBoZWFkID0gKCkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUpjS2I4cTNpcUo2MWdOVjlLR2I4dGhTc05qcFNMMG44UEFSbjlIdVpPbkl4TjBob1ArVm1tREdNTjV0OVVKMFpcIlxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xuXG4gIGNvbnN0IG5hdmUgPSAoKSA9PiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBiZy13YXJuaW5nXCI+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWRhcmtcIj5IT01FPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9saW5rL2NyZWF0ZVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWRhcmsgYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCIwcHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN1Ym1pdCBhIGxpbmtcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICB7IWlzQXV0aGVudGljYXRlKCkgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtZGFya1wiPkxvZ2luPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtZGFya1wiPlJlZ2lzdGVyPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgICAge2lzQXV0aGVudGljYXRlKCkgJiYgaXNBdXRoZW50aWNhdGUoKS5yb2xlID09PSBcImFkbWluXCIgJiYgKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWwtYXV0b1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtZGFya1wiPntpc0F1dGhlbnRpY2F0ZSgpLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICl9XG4gICAgICB7aXNBdXRoZW50aWNhdGUoKSAmJiBpc0F1dGhlbnRpY2F0ZSgpLnJvbGUgPT09IFwic3Vic2NyaWJlclwiICYmIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1sLWF1dG9cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtZGFya1wiPntpc0F1dGhlbnRpY2F0ZSgpLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICl9XG4gICAgICB7aXNBdXRoZW50aWNhdGUoKSAmJiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1kYXJrXCI+XG4gICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApfVxuICAgIDwvdWw+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZCgpfVxuICAgICAge25hdmUoKX0gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNSBwYi01XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.component.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, API_NAME, DOMAIN, PRODUCTION, FB_APP_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API\", function() { return API; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_NAME\", function() { return API_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMAIN\", function() { return DOMAIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCTION\", function() { return PRODUCTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FB_APP_ID\", function() { return FB_APP_ID; });\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  publicRuntimeConfig\n} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();\nconst API = publicRuntimeConfig.API;\nconst API_NAME = publicRuntimeConfig.API_NAME;\nconst DOMAIN = publicRuntimeConfig.DOMAIN;\nconst PRODUCTION = publicRuntimeConfig.PRODUCTION;\nconst FB_APP_ID = publicRuntimeConfig.FB_APP_ID;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/YTFiYyJdLCJuYW1lcyI6WyJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiQVBJIiwiQVBJX05BTUUiLCJET01BSU4iLCJQUk9EVUNUSU9OIiwiRkJfQVBQX0lEIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxNQUFNO0FBQUVBO0FBQUYsSUFBMEJDLGtEQUFTLEVBQXpDO0FBRU8sTUFBTUMsR0FBRyxHQUFHRixtQkFBbUIsQ0FBQ0UsR0FBaEM7QUFDQSxNQUFNQyxRQUFRLEdBQUdILG1CQUFtQixDQUFDRyxRQUFyQztBQUNBLE1BQU1DLE1BQU0sR0FBR0osbUJBQW1CLENBQUNJLE1BQW5DO0FBQ0EsTUFBTUMsVUFBVSxHQUFHTCxtQkFBbUIsQ0FBQ0ssVUFBdkM7QUFDQSxNQUFNQyxTQUFTLEdBQUdOLG1CQUFtQixDQUFDTSxTQUF0QyIsImZpbGUiOiIuL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xuXG5leHBvcnQgY29uc3QgQVBJID0gcHVibGljUnVudGltZUNvbmZpZy5BUElcbmV4cG9ydCBjb25zdCBBUElfTkFNRSA9IHB1YmxpY1J1bnRpbWVDb25maWcuQVBJX05BTUVcbmV4cG9ydCBjb25zdCBET01BSU4gPSBwdWJsaWNSdW50aW1lQ29uZmlnLkRPTUFJTlxuZXhwb3J0IGNvbnN0IFBST0RVQ1RJT04gPSBwdWJsaWNSdW50aW1lQ29uZmlnLlBST0RVQ1RJT05cbmV4cG9ydCBjb25zdCBGQl9BUFBfSUQgPSBwdWJsaWNSdW50aW1lQ29uZmlnLkZCX0FQUF9JRFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ucHJvZ3Jlc3MvbnByb2dyZXNzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/nprogress/nprogress.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout.component */ \"./components/layout.component.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/a.pavlenko/Documents/work-projects/react-aws-project/client/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Home = ({\n  categories\n}) => {\n  const listCategories = () => categories.map((category, index) => __jsx(next_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    style: {\n      border: '1px solid red'\n    },\n    className: \"bg-light p-3 col-md-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"col-md-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: category.image && category.image.url,\n    alt: category.name,\n    style: {\n      width: '100px',\n      height: 'auto'\n    },\n    className: \"pr-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"col-md-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 15\n    }\n  }, category.name)))))));\n\n  return __jsx(_components_layout_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"col-md-12\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"font-weight-bold\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"Browse Tutorials/Courses\"), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"row\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, listCategories()))));\n};\n\nHome.getInitialProps = async () => {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__[\"API\"]}/categories`);\n  return {\n    categories: response.data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJjYXRlZ29yaWVzIiwibGlzdENhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsImluZGV4IiwiYm9yZGVyIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiQVBJIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBRTdCLFFBQU1DLGNBQWMsR0FBRyxNQUFNRCxVQUFVLENBQUNFLEdBQVgsQ0FBZSxDQUFDQyxRQUFELEVBQVdDLEtBQVgsS0FDMUMsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQUFWO0FBQXFDLGFBQVMsRUFBQyx1QkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUYsUUFBUSxDQUFDRyxLQUFULElBQWtCSCxRQUFRLENBQUNHLEtBQVQsQ0FBZUMsR0FBM0M7QUFBZ0QsT0FBRyxFQUFFSixRQUFRLENBQUNLLElBQTlEO0FBQW9FLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUUsT0FBUjtBQUFpQkMsWUFBTSxFQUFFO0FBQXpCLEtBQTNFO0FBQTZHLGFBQVMsRUFBQyxNQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1AsUUFBUSxDQUFDSyxJQUFkLENBREYsQ0FKRixDQURGLENBREYsQ0FERixDQUQyQixDQUE3Qjs7QUFpQkEsU0FBTyxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLGNBQWMsRUFEakIsQ0FIRixDQURGLENBREssQ0FBUDtBQVdELENBOUJEOztBQWdDQUYsSUFBSSxDQUFDWSxlQUFMLEdBQXVCLFlBQVk7QUFDakMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyxHQUFFQywyQ0FBSSxhQUFqQixDQUF2QjtBQUNBLFNBQU87QUFDTGYsY0FBVSxFQUFFWSxRQUFRLENBQUNJO0FBRGhCLEdBQVA7QUFHRCxDQUxEOztBQU9lakIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xuXG5jb25zdCBIb21lID0gKHtjYXRlZ29yaWVzfSkgPT4ge1xuXG4gIGNvbnN0IGxpc3RDYXRlZ29yaWVzID0gKCkgPT4gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgPGEgc3R5bGU9e3tib3JkZXI6ICcxcHggc29saWQgcmVkJ319IGNsYXNzTmFtZT0nYmctbGlnaHQgcC0zIGNvbC1tZC00Jz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZSAmJiBjYXRlZ29yeS5pbWFnZS51cmx9IGFsdD17Y2F0ZWdvcnkubmFtZX0gc3R5bGU9e3t3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnYXV0byd9fSBjbGFzc05hbWU9J3ByLTMnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtOCc+XG4gICAgICAgICAgICAgIDxoMz57Y2F0ZWdvcnkubmFtZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKSlcblxuICByZXR1cm4gPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5Ccm93c2UgVHV0b3JpYWxzL0NvdXJzZXM8L2gxPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAge2xpc3RDYXRlZ29yaWVzKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0Pjtcbn07XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUEl9L2NhdGVnb3JpZXNgKTtcbiAgcmV0dXJuIHtcbiAgICBjYXRlZ29yaWVzOiByZXNwb25zZS5kYXRhXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: setCookie, removeCookie, getCookie, getCookieFromBrowser, getCookieFromServer, setLocalStorage, removeLocalStorage, authenticate, isAuthenticate, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCookie\", function() { return setCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeCookie\", function() { return removeCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCookie\", function() { return getCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCookieFromBrowser\", function() { return getCookieFromBrowser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCookieFromServer\", function() { return getCookieFromServer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocalStorage\", function() { return setLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeLocalStorage\", function() { return removeLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticate\", function() { return authenticate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAuthenticate\", function() { return isAuthenticate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst setCookie = (key, value) => {\n  if (false) {}\n};\nconst removeCookie = key => {\n  if (false) {}\n};\nconst getCookie = (key, req) => {\n  return false ? undefined : getCookieFromServer(key, req);\n};\nconst getCookieFromBrowser = key => {\n  console.log(\"BROWSER: \", key);\n  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);\n};\nconst getCookieFromServer = (key, req) => {\n  console.log(\"req: \", req);\n\n  if (!req.headers.cookie) {\n    return undefined;\n  }\n\n  let token = req.headers.cookie.split(\";\").find(c => c.trim().startsWith(`${key}=`));\n\n  if (!token) {\n    return undefined;\n  }\n\n  let tokenValue = token.split(\"=\")[1];\n  console.log(\"token value:\", tokenValue);\n  return tokenValue;\n};\nconst setLocalStorage = (key, value) => {\n  if (false) {}\n};\nconst removeLocalStorage = key => {\n  if (false) {}\n};\nconst authenticate = (response, callback) => {\n  setCookie(\"token\", response.data.token);\n  setLocalStorage(\"user\", response.data.user);\n  callback();\n};\nconst isAuthenticate = () => {\n  if (false) {}\n\n  return false;\n};\nconst logout = () => {\n  removeCookie(\"token\");\n  removeLocalStorage(\"user\");\n  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(\"/login\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoLmpzPzQ4YzkiXSwibmFtZXMiOlsic2V0Q29va2llIiwia2V5IiwidmFsdWUiLCJyZW1vdmVDb29raWUiLCJnZXRDb29raWUiLCJyZXEiLCJnZXRDb29raWVGcm9tQnJvd3NlciIsImdldENvb2tpZUZyb21TZXJ2ZXIiLCJjb25zb2xlIiwibG9nIiwiY29va2llIiwiZ2V0IiwiaGVhZGVycyIsInVuZGVmaW5lZCIsInRva2VuIiwic3BsaXQiLCJmaW5kIiwiYyIsInRyaW0iLCJzdGFydHNXaXRoIiwidG9rZW5WYWx1ZSIsInNldExvY2FsU3RvcmFnZSIsInJlbW92ZUxvY2FsU3RvcmFnZSIsImF1dGhlbnRpY2F0ZSIsInJlc3BvbnNlIiwiY2FsbGJhY2siLCJkYXRhIiwidXNlciIsImlzQXV0aGVudGljYXRlIiwibG9nb3V0IiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLFNBQVMsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDdkMsYUFBcUIsRUFJcEI7QUFDRixDQU5NO0FBUUEsTUFBTUMsWUFBWSxHQUFJRixHQUFELElBQVM7QUFDbkMsYUFBcUIsRUFFcEI7QUFDRixDQUpNO0FBTUEsTUFBTUcsU0FBUyxHQUFHLENBQUNILEdBQUQsRUFBTUksR0FBTixLQUFjO0FBQ3JDLFNBQU8sUUFDSEMsU0FERyxHQUVIQyxtQkFBbUIsQ0FBQ04sR0FBRCxFQUFNSSxHQUFOLENBRnZCO0FBR0QsQ0FKTTtBQU1BLE1BQU1DLG9CQUFvQixHQUFJTCxHQUFELElBQVM7QUFDM0NPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJSLEdBQXpCO0FBQ0EsU0FBT1MsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXVixHQUFYLENBQVA7QUFDRCxDQUhNO0FBS0EsTUFBTU0sbUJBQW1CLEdBQUcsQ0FBQ04sR0FBRCxFQUFNSSxHQUFOLEtBQWM7QUFDL0NHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJKLEdBQXJCOztBQUNBLE1BQUksQ0FBQ0EsR0FBRyxDQUFDTyxPQUFKLENBQVlGLE1BQWpCLEVBQXlCO0FBQ3ZCLFdBQU9HLFNBQVA7QUFDRDs7QUFDRCxNQUFJQyxLQUFLLEdBQUdULEdBQUcsQ0FBQ08sT0FBSixDQUFZRixNQUFaLENBQ1RLLEtBRFMsQ0FDSCxHQURHLEVBRVRDLElBRlMsQ0FFSEMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLElBQUYsR0FBU0MsVUFBVCxDQUFxQixHQUFFbEIsR0FBSSxHQUEzQixDQUZILENBQVo7O0FBR0EsTUFBSSxDQUFDYSxLQUFMLEVBQVk7QUFDVixXQUFPRCxTQUFQO0FBQ0Q7O0FBQ0QsTUFBSU8sVUFBVSxHQUFHTixLQUFLLENBQUNDLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQWpCO0FBQ0FQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJXLFVBQTVCO0FBQ0EsU0FBT0EsVUFBUDtBQUNELENBZE07QUFnQkEsTUFBTUMsZUFBZSxHQUFHLENBQUNwQixHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDN0MsYUFBcUIsRUFFcEI7QUFDRixDQUpNO0FBTUEsTUFBTW9CLGtCQUFrQixHQUFJckIsR0FBRCxJQUFTO0FBQ3pDLGFBQXFCLEVBRXBCO0FBQ0YsQ0FKTTtBQU1BLE1BQU1zQixZQUFZLEdBQUcsQ0FBQ0MsUUFBRCxFQUFXQyxRQUFYLEtBQXdCO0FBQ2xEekIsV0FBUyxDQUFDLE9BQUQsRUFBVXdCLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjWixLQUF4QixDQUFUO0FBQ0FPLGlCQUFlLENBQUMsTUFBRCxFQUFTRyxRQUFRLENBQUNFLElBQVQsQ0FBY0MsSUFBdkIsQ0FBZjtBQUNBRixVQUFRO0FBQ1QsQ0FKTTtBQU1BLE1BQU1HLGNBQWMsR0FBRyxNQUFNO0FBQ2xDLGFBQXFCLEVBT3BCOztBQUNELFNBQU8sS0FBUDtBQUNELENBVk07QUFZQSxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUMxQjFCLGNBQVksQ0FBQyxPQUFELENBQVo7QUFDQW1CLG9CQUFrQixDQUFDLE1BQUQsQ0FBbEI7QUFDQVEsb0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRCxDQUpNIiwiZmlsZSI6Ii4vdXRpbHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBjb29raWUuc2V0KGtleSwgdmFsdWUsIHtcbiAgICAgIGV4cGlyZXM6IDEsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAoa2V5KSA9PiB7XG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBjb29raWUucmVtb3ZlKGtleSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5LCByZXEpID0+IHtcbiAgcmV0dXJuIHByb2Nlc3MuYnJvd3NlclxuICAgID8gZ2V0Q29va2llRnJvbUJyb3dzZXIoa2V5KVxuICAgIDogZ2V0Q29va2llRnJvbVNlcnZlcihrZXksIHJlcSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29va2llRnJvbUJyb3dzZXIgPSAoa2V5KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQlJPV1NFUjogXCIsIGtleSk7XG4gIHJldHVybiBjb29raWUuZ2V0KGtleSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29va2llRnJvbVNlcnZlciA9IChrZXksIHJlcSkgPT4ge1xuICBjb25zb2xlLmxvZyhcInJlcTogXCIsIHJlcSk7XG4gIGlmICghcmVxLmhlYWRlcnMuY29va2llKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBsZXQgdG9rZW4gPSByZXEuaGVhZGVycy5jb29raWVcbiAgICAuc3BsaXQoXCI7XCIpXG4gICAgLmZpbmQoKGMpID0+IGMudHJpbSgpLnN0YXJ0c1dpdGgoYCR7a2V5fT1gKSk7XG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGxldCB0b2tlblZhbHVlID0gdG9rZW4uc3BsaXQoXCI9XCIpWzFdO1xuICBjb25zb2xlLmxvZyhcInRva2VuIHZhbHVlOlwiLCB0b2tlblZhbHVlKTtcbiAgcmV0dXJuIHRva2VuVmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gKGtleSwgdmFsdWUpID0+IHtcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSAocmVzcG9uc2UsIGNhbGxiYWNrKSA9PiB7XG4gIHNldENvb2tpZShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuICBzZXRMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIsIHJlc3BvbnNlLmRhdGEudXNlcik7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNBdXRoZW50aWNhdGUgPSAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBjb25zdCBjb29raWVDaGVja2VkID0gZ2V0Q29va2llRnJvbUJyb3dzZXIoXCJ0b2tlblwiKTtcbiAgICBpZiAoY29va2llQ2hlY2tlZCkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICByZW1vdmVDb29raWUoXCJ0b2tlblwiKTtcbiAgcmVtb3ZlTG9jYWxTdG9yYWdlKFwidXNlclwiKTtcbiAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/Link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIj9lYzk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/Link\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nprogress\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIj8xNTViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nprogress\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });