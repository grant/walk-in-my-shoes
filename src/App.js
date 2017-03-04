import React, { Component } from 'react';

// css
import './reset.css';
import './App.css';

// images
import btnMenu from './img/btnMenu.png';
import btnClose from './img/btnClose.png';

/**
 * The main component for the App.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img className='btnMenu' src={btnMenu} alt=""/>
          <ul className='condition'>
            <li>Condition X</li>
            <li>Condition Y</li>
          </ul>
          <div className="timer">
            11:00
          </div>
        </header>
        <div className="art">
          ART
        </div>
        <div className="modals">
          <div className="modal">
            <h1>final</h1>
            <img className='btnClose' src={btnClose} alt=""/>
            <ul className="options">
              <li>Clinic City provides services within 20 weeks</li>
              <li>Clinic City provides services within 20 weeks</li>
              <li>Clinic City provides services within 20 weeks</li>
              <li>Clinic City provides services within 20 weeks</li>
            </ul>
          </div>
        </div>
        <footer className="footer">
          <p className="text">Bacon ipsum dolor amet corned beef chicken chuck landjaeger, burgdoggen jowl ham hock strip steak meatloaf biltong beef ribs short ribs.</p>
          <ul className="choices">
            <li className="choice">Choice 1</li>
            <li className="choice">Choice 2</li>
            <li className="choice">Choice 3</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
