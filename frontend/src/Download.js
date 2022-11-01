import { Button, TextField } from "@mui/material";
import "./Download.css";

const Download = () => {
  /*
    onChange handler
    - for text field
    - updates the context state and filename state
    onClick handler
    - validation for missing field
    - sends an api request (later) with context (converted to json), filename, and file (from the local storage)
    - if error:
        - windows.alert
    - remove the file from local storage regardless
    - redirects the user back to the upload
    */
  const mockData = ["name", "amount", "date"];

  return (
    <div className="main-download">
      <span id="title">
        <h1>Fill out the form below</h1>
      </span>
      <div className="inputs">
        <TextField
          required
          id="filled-required"
          label="filename"
          variant="filled"
          key={0}
        />
        <span className="divider"></span>
        {mockData.map((el, idx) => (
          <>
            <TextField
              required
              id="filled-required"
              label={el}
              variant="filled"
              key={idx + 1}
            />
            <span className="divider"></span>
          </>
        ))}
      </div>
      <Button variant="contained">Download</Button>
    </div>
  );
};

export default Download;
