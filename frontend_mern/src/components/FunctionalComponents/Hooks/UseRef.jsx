import React from "react";
import { useState, useEffect, useRef } from "react";
const Useref = () => {
  var [text, setText] = useState("");
  var previousRender = useRef();
  useEffect(() => {
    previousRender.current=text;
    console.log(text)
  },[text]);
  return (
    <div>
      <h1>This is an useRef example</h1>
      Type your text:{" "}
      <input
        type="text"
        vzlue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>The current render text is {text}</h2>
      <h3>The previous render text is {previousRender.current}</h3>
    </div>
  );
};

export default Useref;
