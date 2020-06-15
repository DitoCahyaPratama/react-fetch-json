import React from 'react';
import Home from './home';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
