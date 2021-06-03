import React from "react";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

function Home({ handleLogout }) {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];
  const [user, setUser] = useState();

  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <section className="home">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div className="Text">
        <h1 style={{ fontSize: "3.2em" }}>
          <b>Automatic Text Summarizer</b>
        </h1>
        <p>Multi-Language Summarizing & Paraphrasing AI Tool</p>

        <div className="Para">
          <p style={{ fontSize: "0.9em" }}>
            This tool analyzes the textual patterns of any piece to render the
            best results. You’ll get the gist of any article, essay, research
            paper or any other text compressed into just a couple of sentences!
            You can also use this tool to summarize your own papers or custom
            writing works and to create great abstracts, thesis statements, and
            more.
          </p>
        </div>

        <div>
          <form className="form-group" onSubmit={() => handlePdfFileSubmit()}>
            {/* <input
              type="file"
              className="form-control"
              required
              onChange={() => handlePdfFileChange()}
            ></input> */}

            {/* <button type="submit" className="btn btn-success btn-lg">
              UPLOAD
            </button> */}
          </form>
        </div>
      </div>
      <div className="textbox">
        {/* <TextField
          label="Paste your text here"
          color="primary"
          variant="outlined"
          multiline
          fullWidth
        /> */}
        <input
          type="file"
          className="form-control"
          required
          onChange={() => handlePdfFileChange()}
        ></input>
        <br></br>
        {/* 
        <button type="submit" className="btn btn-success btn-lg">
          UPLOAD
        </button> */}
        <div className="actionBtns">
          <button style={{ backgroundColor: "blueviolet" }} type="reset">
            Summarize
          </button>
          <button style={{ backgroundColor: "blueviolet" }} type="reset">
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
