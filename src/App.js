import React, { Component } from 'react';
// import logo from './logo.svg';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <header className="App-header">
          {/* <img src={logo} width={128} alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <FontIcon className="material-icons">
          radio_button_checked
                </FontIcon>

        <FontIcon className="material-icons" >home</FontIcon>
      </MuiThemeProvider>
    );
  }
}

export default App;
