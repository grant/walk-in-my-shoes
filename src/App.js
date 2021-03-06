import React, { Component } from 'react';
import arc from './arc.jsx';

// css
import './reset.css';
import './App.css';

// images
import btnMenu from './img/btnMenu.png';
import btnClose from './img/btnClose.png';
import btnCTA1 from './img/btnCTA1.png';
import btnCTA2 from './img/btnCTA2.png';
import btnCTA3 from './img/btnCTA3.png';
import btnCTA1_Hit from './img/btnCTA1_Hit.png';
import btnCTA2_Hit from './img/btnCTA2_Hit.png';
import btnCTA3_Hit from './img/btnCTA3_Hit.png';

import childcare from './img/cover/childcare.png';
import confidentiality from './img/cover/confidentiality.png';
import provider from './img/cover/provider.png';
import transportation from './img/cover/transportation.png';

import timerFill from './img/timerFill.png';
import timerOverlay from './img/timerOverlay.png';
import shellTimer from './img/shellTimer.png';

/**
 * The main component for the App.
 */
class App extends Component {
  constructor(props) {
    super(props);

    var childcareImg = `url(${childcare})`;
    var confidentialityImg = `url(${confidentiality})`;
    var providerImg = `url(${provider})`;
    var transportationImg = `url(${transportation})`;
    var images = [
      childcareImg,
      confidentialityImg,
      providerImg,
      transportationImg
    ];
    var randomImage = images[Math.floor(Math.random()*images.length)];

    this.state = {
      modalClosed: true,
      timerDate: +new Date(),
      backgroundImage: randomImage,
      choices: []
    };

    setInterval(() => {
      this.setState({
        date: +new Date()
      });
    }, 100);

    var t = this;

    // POST http://localhost:5000/decision
    // {
    //    game_id
    //    choice_id
    //    bio_days_pregnant
    //    current_category
    // }
    // POST http://localhost:5000/start
    fetch('http://localhost:5000/start', {
      method: 'POST'
    })
      .then(function(res){
        return res.json();
      })
      .then(function(data){
        console.log(data);
        t.setState({
          game_id: data.game_id,
          bioText: data.bio_full_text,
          bio_days_pregnant: data.bio_days_pregnant,
          current_category: data.current_category,
          choices: [{
            text: data.choice1_option_text,
            img: btnCTA1,
            img_hover: btnCTA1_Hit,
            id: data.choice1_id
          }, {
            text: data.choice2_option_text,
            img: btnCTA2,
            img_hover: btnCTA2_Hit,
            id: data.choice2_id
          }, {
            img: btnCTA3,
            img_hover: btnCTA3_Hit,
            text: data.choice3_option_text,
            id: data.choice3_id
          }]
        });
      });
  }

  render() {
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
      console.log('selected', button);
      var id = button.id;
      console.log('id', id);
      fetch('http://localhost:5000/decision', {
        method: 'POST',
        body: {

        }
      })
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          console.log(data);
        });
    }

    /**
     * When clicking the menu button.
     */
    function onMenuClick() {
      console.log('clicked on the menu');
    }

    var choiceText = 'Bacon ipsum dolor amet corned beef chicken chuck landjaeger, burgdoggen jowl ham hock strip steak meatloaf biltong beef ribs short ribs.';

    /**
     * Gets the fillings of the timer
     * @param  {[type]} fullRatio [description]
     * @return {[type]}           [description]
     */
    function getTimer(fullRatio) {
      var radius = 62;
      if (document.getElementById("theSvgArc")) {
        document
          .getElementById("theSvgArc")
          .setAttribute("d", arc.describeArc(radius, radius, radius, 0, fullRatio * 360));
      }

      return (
        <svg className="timerFills">
          <path id="theSvgArc"/>
        </svg>
      );
    }

    var diffSinceLastDate = (this.state.date - this.state.timerDate) || 0;
    var timerRatio = Math.min(diffSinceLastDate/10000, 0.99);

    return (
      <div className="App">
        <header>
          <img className='btnMenu' src={btnMenu} onClick={onMenuClick.bind(this)} alt=""/>
          <h1 className='title' >Walk in My Shoes</h1>
          {/*<ul className='condition'>
                      <li>Condition X</li>
                      <li>Condition Y</li>
                    </ul>*/}
          <img className='shellTimer' src={shellTimer}/>
          <img className='timerOverlay' src={timerOverlay}/>
          <span className="timeText">10 weeks</span>
          {getTimer(timerRatio)}
        </header>
        <div className="art" style={{
          backgroundImage: this.state.backgroundImage
        }
        }>
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
            <p className="text">{this.state.bioText}</p>
            <ul className="choices">
              {this.state.choices.map(c => <li
                  className="choice"
                  key={c.img}
                  onClick={onChoice.bind(this, c)}
                >
                {false ? <img src={c.img_hover} alt=""/> : <img src={c.img} alt=""/>}
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
