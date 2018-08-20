import React, { Component } from 'react';
import GlosariumWrapper from './components/GlosariumWrapper';
import { Provider } from 'react-redux'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlosariumWrapper />
        </div>
      </Provider>
    );
  }
}

export default App;
