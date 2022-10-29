import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Upload />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
