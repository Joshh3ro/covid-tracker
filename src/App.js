import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Switch>
          <Route exact path="/" component={ About } />
          <Route path="/project" component={ Project } />
          <Route path="/tracker" component={ Tracker } />
          <Route path="*" component={ NoMatch } />
          </Switch>
        </div>
      
    </Router>
  );
}

export default App;
