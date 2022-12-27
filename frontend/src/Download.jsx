import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "./Context";
import "./Download.css";
import { forceFileDownload, postRequest } from "./utils";

const Download = () => {
  const [file_name, setFileName] = useState("");
  const [context_obj, setContextObj] = useState({});
  const { varList, file, clearList, clearFile } = useContext(context);
  let navigate = useNavigate();

  const handleChange = (key, value) => {
    if (key === "filename") {
      setFileName(value);
    } else {
      const new_obj = context_obj;
      new_obj[key] = value;
      setContextObj(new_obj);
    }
  };

  const exit = () => {
    clearList();
    clearFile();
    navigate("/");
  };

  const handleClick = async () => {
    if (Object.keys(context_obj).length !== varList.length) {
      alert("Missing field!");
      return;
    }

    if (!file_name) {
      alert("Missing file name!");
      return;
    }

    const json = JSON.stringify(context_obj);

    if (!file) {
      alert("Missing file!");
      exit();
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("context_obj", json);
    formData.append("file_name", file_name);

    const res = await postRequest("download", formData, "multipart/formData");
    if (res.status !== 200) {
      alert(`${res.status}; ${res.message}`);
    }
    forceFileDownload(res, file_name + ".pdf");
    exit();
  };

  return (
    <div className="main-download">
      <span id="title">
        <h1>Fill out the form below</h1>
      </span>
      <div className="inputs">
        <TextField
          required={true}
          id="filled-required"
          label="filename"
          variant="filled"
          key={0}
          onChange={(e) => handleChange("filename", e.target.value)}
        />
        <span className="divider"></span>
        {varList.map((el, idx) => (
          <>
            <TextField
              required={true}
              id="filled-required"
              label={el}
              variant="filled"
              key={idx + 1}
              onChange={(e) => handleChange(el, e.target.value)}
            />
            <span className="divider"></span>
          </>
        ))}
      </div>
      <Button variant="contained" onClick={() => handleClick()}>
        Download
      </Button>
    </div>
  );
};

export default Download;
