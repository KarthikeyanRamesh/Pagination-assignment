import './App.css';
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pages from './components/Pages';
function App() {
  return (
    <Router>
      <div className="container">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/pagination">
              <Pages />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
 
  );
}

export default App;
