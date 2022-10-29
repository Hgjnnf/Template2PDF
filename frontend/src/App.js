import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./Upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Upload />} />
        {/* <Route path="/download" element={<Download />}> */}
      </Routes>
    </Router>
  );
}

export default App;
