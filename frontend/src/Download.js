import { Button, TextField } from "@mui/material";
import "./Download.css";

const Download = () => {
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
