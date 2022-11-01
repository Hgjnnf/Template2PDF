import React, { useContext } from "react";
import { useDropzone } from "react-dropzone";
import "./Upload.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Button from "@mui/material/Button";
import { AppBar, Toolbar } from "@mui/material";
import { context } from "./Context";
import { useHistory } from "react-router-dom";

const Upload = () => {
  /* 
  onClick:
  - send API
  - if file upload is successful
    - store the file in localStorage
    - pass the resulting array as a prop to download
    - redirect page to the download
  - else
    - windows.alert error 
  */
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });
  const { updateList } = useContext(context);
  let history = useHistory();

  const unitFormatter = (size, unit) => {
    return size.toLocaleString("en-US", { style: "unit", unit });
  };

  const files = acceptedFiles.map((file) => (
    <p>
      {file.path} - {unitFormatter(file.size / 1000, "kilobyte")}
    </p>
  ));

  const handleClick = () => {
    const file = new FormData();
    file.append(acceptedFiles[0]);

    // API

    const res = {
      data: ["name", "amount", "date"],
      status: 200,
    };

    if (res.status === 200) {
      localStorage.setItem("file", file);
      updateList(res.data);
      history.push("/download");
    } else {
      let errMsg;
      switch (res.status) {
        case 404:
          errMsg = "A file is required for upload!";
        case 406:
          errMsg = "Wrong file type. Must be .html!";
        default:
          errMsg = `Unknown error. Status code: ${res.status}`;
      }
      alert(errMsg);
    }
  };

  return (
    <div className="main">
      <AppBar position="static" className="top-bar">
        <Toolbar variant="dense">
          <h1>Template to PDF Generator</h1>
        </Toolbar>
      </AppBar>
      <section className="file-drop">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag and drop the html file here, or click to select the file</p>
        </div>
        <div className="file-drop-bottom">
          <div className="file">
            <DescriptionOutlinedIcon />
            {files}
          </div>
          <Button variant="contained" onClick={handleClick}>
            Upload
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Upload;
