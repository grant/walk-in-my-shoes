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
  constructor(props) {
    super(props);
    this.state = {
      modalClosed: false
    };
  }

  render() {
    var choices = [{
      img: btnCTA1,
      text: 'Get gas'
    }, {
      img: btnCTA2,
      text: 'Get gas'
    }, {
      img: btnCTA3,
      text: 'Get gas'
    }];

    function onClose() {
      this.setState({
        modalClosed: true
      });
    }

    /**
     * When clicking on a choice button.
     */
    function onChoice(button) {
      var text = button.text;
      console.log('selected', text);
    }

    /**
     * When clicking the menu button.
     */
    function onMenuClick() {
      console.log('clicked on the menu');
    }

    var choiceText = 'Bacon ipsum dolor amet corned beef chicken chuck landjaeger, burgdoggen jowl ham hock strip steak meatloaf biltong beef ribs short ribs.';

    return (
      <div className="App">
        <header>
          <img className='btnMenu' src={btnMenu} onClick={onMenuClick.bind(this)} alt=""/>
          {/*<ul className='condition'>
                      <li>Condition X</li>
                      <li>Condition Y</li>
                    </ul>*/}
          <div className="timer">
            11:00
          </div>
        </header>
        <div className="art">
          ART
        </div>
        <div className="modals">
          {!this.state.modalClosed ? (
            <div className="modal">
              <h1>final</h1>
              <img className='btnClose' src={btnClose} alt="" onClick={onClose.bind(this)}/>
              <ul className="options">
                <li>Clinic City provides services within 20 weeks</li>
                <li>Clinic City provides services within 20 weeks</li>
                <li>Clinic City provides services within 20 weeks</li>
                <li>Clinic City provides services within 20 weeks</li>
              </ul>
            </div>
          ) : ''}
        </div>
        <footer className="footer">
          <div className="choice-box">
            <p className="text">{choiceText}</p>
            <ul className="choices">
              {choices.map(c => <li className="choice" key={c.img} onClick={onChoice.bind(this, c)}>
                <img src={c.img} alt=""/>
                <span className="text">{c.text}</span>
              </li>)}
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
