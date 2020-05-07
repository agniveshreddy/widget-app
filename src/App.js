import React from 'react';
import './App.css';
import Posts from './components/Posts';
import DataSharing from './components/DataSharing';
import Container from './components/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Container">Container</Link>
            </li>
            <li>
              <Link to="/Posts">Posts</Link>
            </li>
            <li>
              <Link to="/DataSharing">DataSharing</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Container">
            <Container />
          </Route>
          <Route path="/Posts">
            <Posts />
          </Route>
          <Route path="/DataSharing">
            <DataSharing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
