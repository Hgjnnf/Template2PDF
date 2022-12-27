import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context";

const Upload = React.lazy(() => import("./Upload"));
const Download = React.lazy(() => import("./Download"));

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
