import React, { useState } from "react";

export default function TextForm(props) {
  const [mytext, setMyText] = useState("Enter your text here.");
  const convertUpperCase = () => {
    let newText = mytext.toUpperCase();
    setMyText(newText);
    props.showAlert("Converted to uppper case.", "primary");
  };
  const textAreaModification = (event) => {
    setMyText(event.target.value);
  };

  const convertLowerCase = () => {
    let lowcase = mytext.toLowerCase();
    setMyText(lowcase);
    props.showAlert("Converted to lower case.", "primary");
  };
  const clearText = () => {
    let clrText = "";
    setMyText(clrText);
  };
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          onChange={textAreaModification}
          className="form-control"
          value={mytext}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={convertUpperCase}>
        Covert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={convertLowerCase}>
        Convert to lower case
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </button>
      <div className="container my-3">
        <h1>Your text summery:</h1>
        <p>
          word count <b> {mytext.split(" ").length} </b>and Character Count{" "}
          <b> {mytext.length}</b>
        </p>
        <p>
          <b>{0.008 * mytext.split(" ").length} </b> minutes read
        </p>
        <h2>Preview</h2>
        {mytext}
      </div>
    </>
  );
}
