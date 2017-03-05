import React, { Component } from 'react';

// css
import './reset.css';
import './App.css';

// images
import btnMenu from './img/btnMenu.png';
import btnClose from './img/btnClose.png';
import btnCTA1 from './img/btnCTA1.png';
import btnCTA2 from './img/btnCTA2.png';
import btnCTA3 from './img/btnCTA3.png';

/**
 * The main component for the App.
 */
class App extends Component {
  render() {
    var choices = [{
      img: btnCTA1,
      text: 'hi'
    }, {
      img: btnCTA2,
      text: 'hii'
    }, {
      img: btnCTA3,
      text: 'hiiiii'
    }];

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
            {choices.map(c => <li className="choice" key={c.img}>
              <img src={c.img} alt=""/>
              <span className="text">{c.text}</span>
            </li>)}
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
