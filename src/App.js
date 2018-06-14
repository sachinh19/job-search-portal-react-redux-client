import React, { Component } from 'react';
import Store from './stores/Store'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Provider store={Store}>
              <Router history={history}>
                  <Routes/>
              </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
