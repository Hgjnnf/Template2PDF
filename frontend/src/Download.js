import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "./Context";
import "./Download.css";

const Download = () => {
  const [file_name, setFileName] = useState("");
  const [context_obj, setContextObj] = useState({});
  const file = localStorage.getItem("file");
  const { varList, clearList } = useContext(context);
  let navigate = useNavigate();

  const handleChange = (key, value) => {
    if (key === "filename") {
      setFileName(value);
    } else {
      setContextObj({
        ...context_obj,
        key: value,
      });
    }
  };

  const handleClick = () => {
    // API
    const res = {
      data: "",
      status: 200,
    };

    if (res.status !== 200) {
      alert(res.data);
    }
    clearList();
    localStorage.clear();
    navigate("/");
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
          name="filename"
          variant="filled"
          key={0}
          onChange={(name, value) => handleChange(name, value)}
        />
        <span className="divider"></span>
        {varList.map((el, idx) => (
          <>
            <TextField
              required={true}
              id="filled-required"
              label={el}
              name={el}
              variant="filled"
              key={idx + 1}
              onChange={(name, value) => handleChange(name, value)}
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
