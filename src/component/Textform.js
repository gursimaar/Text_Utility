import React, { useState } from "react";

export default function Textform(props) {
  const Uppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert(" Converted to upper case", "success");
  };
  const Lowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert(" Converted to Lower Case", "success");
  };
  const clear_text = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert(" Cleared", "success");
  };
  const Capitalize = () => {
    let newtext = text[0].toUpperCase() + text.substring(1).toLowerCase();
    setText(newtext);
    props.showAlert(" Converted to Capitalize", "success");
  };

  const Copy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied To Clipboard", "success");
  };
  const RemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Removed Extra Spaces ", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2> {props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter your Text"
            id="my-box"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={Uppercase}>
          {" "}
          Convert to UpperCase
        </button>
        <button disabled = {text.length===0} className="btn btn-danger mx-1 my-1 " onClick={Lowercase}>
          {" "}
          Convert to UpperCase
        </button>
        <button disabled = {text.length===0} className="btn btn-warning mx-1 my-1 " onClick={Capitalize}>
          {" "}
          Convert to Capitalize
        </button>
        <button disabled = {text.length===0} className="btn btn-dark mx-1 my-1" onClick={Copy}>
          Copy
        </button>
        <button disabled = {text.length===0}
          className="btn btn-danger mx-1 my-1 "
          onClick={RemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button  disabled = {text.length===0}className="btn btn-secondary mx-1 my-1" onClick={clear_text}>
          {" "}
          Clear
        </button>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length}characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter the text to preview it"}</p>
      </div>
    </>
  );
}
