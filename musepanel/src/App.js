import React, { Component } from 'react';

// Import UI Components
import Button from './Button';

// Import styles
import { Div } from './AppStyles.js'

class App extends Component {
  render() {
    var params = this.props.queryParams;

    return (
      <Div>
        <header>
          <Button songName="Tum Hi Ho"></Button>
          <h1 className="App-title">Welcome to React {params.hello} </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Div>
    );
  }
}

export default App;
