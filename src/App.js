import React, { Component } from 'react';
import GlosariumWrapper from './components/GlosariumWrapper';
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GlosariumWrapper />
        </Router>
      </Provider>
    );
  }
}

export default App;
