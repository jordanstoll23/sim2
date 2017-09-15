import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dash from './components/dash';
import Wizard from './components/wizard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dash" component={Dash} />
            <Route path="/wizard" component={Wizard} />
            {/* <Route path="/create/:id" component={Create} /> */}
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;