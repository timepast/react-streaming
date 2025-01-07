import React, { useEffect } from "react";
import { useData } from "./data.js";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export default function Comments() {
  var comments = useData();
  useEffect(function () {
    console.log("Client Comments:", comments); // 检查数据
  }, []);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: comments.map(function (comment, i) {
      return /*#__PURE__*/_jsx("p", {
        className: "comment",
        children: comment
      }, i);
    })
  });
}