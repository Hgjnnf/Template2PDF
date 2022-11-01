import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./Upload";
import Download from "./Download";
import { ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
