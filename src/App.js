import './App.css';
import Login from "./Login";
import TableData from "./TableData";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path ="/" component ={Login} />
      <Route exact path ="/TableData"  component ={TableData} />
    </div>
    </Router>
  );
}

export default App;
