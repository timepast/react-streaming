import React, { useEffect } from "react";

import { useData } from "./data.js";

export default function Comments() {
  const comments = useData();

  useEffect(() => {
    console.log("Client Comments:", comments); // 检查数据
  }, []);

  return (
    <>
      {comments.map((comment, i) => (
        <p className="comment" key={i}>
          {comment}
        </p>
      ))}
    </>
  );
}
