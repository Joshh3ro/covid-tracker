import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Layout
import Nav from './components/layout/Nav';


//Page Tree
import About from './components/pages/About';
import Tracker from './components/pages/Tracker';
import Project from './components/pages/Project';
import NoMatch from './components/pages/Error';


function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={ About } />
      <Route path="/project" component={ Project } />
      <Route path="/tracker" component={ Tracker } />
      <Route path="*" component={ NoMatch } />
    </div>
  </Router>
  );
}

export default App;
