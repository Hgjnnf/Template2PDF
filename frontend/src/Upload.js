import React from "react";
import { useDropzone } from "react-dropzone";
import "./Upload.css";

const Upload = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const unitFormatter = (size, unit) => {
    return size.toLocaleString("en-US", { style: "unit", unit });
  };

  const files = acceptedFiles.map((file) => (
    <p>
      {file.path} - {unitFormatter(file.size / 1000, "kilobyte")}
    </p>
  ));

  return (
    <div className="main">
      <h1 id="title">HTML To PDF Generator</h1>
      <section className="file-drop">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag and drop the html file here, or click to select the file</p>
        </div>
        <h4>File:</h4>
        {files}
      </section>
    </div>
  );
};

export default Upload;
