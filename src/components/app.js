import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToday } from '../actions/fetch-today';

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default connect(null, { fetchToday })(App);
