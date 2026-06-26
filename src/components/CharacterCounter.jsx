import React, { useState } from "react";

const CharacterCounter = () => {
  const [sentence, setSentence] = useState("");

  const characterCount = sentence.length;

  const wordCount =
    sentence.trim() === ""
      ? 0
      : sentence.trim().split(/\s+/).length;

  return (
    <div className="container">

      <h1>Live Character Counter</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Type something here..."
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />

      <div className="result-box">

        <div className="mt-4">
          <h5>Entered Text</h5>
          <p>{sentence || "Nothing typed yet..."}</p>
        </div>

        <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>

          <div>
            <h2>{characterCount}</h2>
            <p>Characters</p>
          </div>

          <div>
            <h2>{wordCount}</h2>
            <p>Words</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default CharacterCounter;