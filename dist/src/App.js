function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { Suspense, useEffect, useState } from "react";
import Comments from "./Comments.js";
import Spinner from "./Spinner.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ComponentA = function ComponentA() {
  return /*#__PURE__*/_jsx("div", {
    style: {
      lineHeight: "10em"
    },
    children: "\uD83D\uDFE2 Component A Loaded"
  });
};

// const Comments = React.lazy(() =>
//   import("./Comments.jsx" /* webpackPrefetch: true */)
// );

function App() {
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  useEffect(function () {
    setName("cezo");
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("h1", {
      onClick: function onClick() {
        alert("hello, world!");
      },
      children: ["\uD83D\uDE80 Streaming React Rendering Example ", name]
    }), /*#__PURE__*/_jsx(Suspense, {
      fallback: /*#__PURE__*/_jsx(Spinner, {}),
      children: /*#__PURE__*/_jsx(ComponentA, {})
    }), /*#__PURE__*/_jsxs("section", {
      className: "comments",
      children: [/*#__PURE__*/_jsx("h2", {
        children: "Comments"
      }), /*#__PURE__*/_jsx(Suspense, {
        fallback: /*#__PURE__*/_jsx(Spinner, {}),
        children: /*#__PURE__*/_jsx(Comments, {})
      })]
    })]
  });
}
export default App;