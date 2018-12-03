import React, { Component } from 'react';
import logo from 'Images/logo.svg';
import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    // eslint-disable-next-line
    const { count, fetching, dog, error, onRequestDog } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button type="button" disabled>Fetching...</button>
        ) : (
          <button type="button" onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

export default App;
