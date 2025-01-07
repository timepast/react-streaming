import React, { Suspense, useEffect, useState } from "react";
import Comments from "./Comments.js";
import Spinner from "./Spinner.js";


const ComponentA = () => (
  <div
    style={{
      lineHeight: "10em",
    }}
  >
    🟢 Component A Loaded
  </div>
);

// const Comments = React.lazy(() =>
//   import("./Comments.jsx" /* webpackPrefetch: true */)
// );

function App() {
  let [name, setName] = useState("");

  useEffect(() => {
    setName("cezo");
  }, []);

  return (
    <div>
      <h1
        onClick={() => {
          alert("hello, world!");
        }}
      >
        🚀 Streaming React Rendering Example {name}
      </h1>
      <Suspense fallback={<Spinner />}>
        <ComponentA />
      </Suspense>
      <section className="comments">
        <h2>Comments</h2>
        <Suspense fallback={<Spinner />}>
          <Comments />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
