import React, { useContext } from "react";
import { useDropzone } from "react-dropzone";
import "./Upload.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Button from "@mui/material/Button";
import { AppBar, Toolbar } from "@mui/material";
import { context } from "./Context";
import { useNavigate } from "react-router-dom";
import { postRequest } from "./utils";

const Upload = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });
  const { updateList, saveFile } = useContext(context);
  let navigate = useNavigate();

  const unitFormatter = (size, unit) => {
    return size.toLocaleString("en-US", { style: "unit", unit });
  };

  const files = acceptedFiles.map((file) => (
    <p key={"file-text"}>
      {file.path} - {unitFormatter(file.size / 1000, "kilobyte")}
    </p>
  ));

  const handleClick = async () => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    const res = await postRequest("upload", formData, "multipart/formData");

    if (res.status === 200) {
      saveFile(acceptedFiles[0]);
      updateList(res.data);
      navigate("/download");
    } else {
      alert(`${res.status}; ${res.message}`);
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
          <p key={"dropzone-text"}>
            Drag and drop the html file here, or click to select the file
          </p>
        </div>
        <div className="file-drop-bottom">
          <div className="file">
            <DescriptionOutlinedIcon />
            {files}
          </div>
          <Button variant="contained" onClick={() => handleClick()}>
            Upload
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Upload;
