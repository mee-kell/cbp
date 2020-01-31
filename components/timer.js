import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import ChangingProgressProvider from "./ChangingProgressProvider";

let secondsArray = new Array(1500);
for (let i = 0; i < 1500; i++) {
  secondsArray[i] = i;
}

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.showTimer = this.showTimer.bind(this);
    this.hideTimer = this.hideTimer.bind(this);
  };

  showTimer() {
    this.setState ({visibility: true})
  }

  hideTimer() {
    this.setState ({visibility: false});
  }

  render() {

    const visibility = this.state.visibility;

    if (visibility === true) {

      return(
        <div>

          <ChangingProgressProvider values={secondsArray}>
            {time => (
              <CircularProgressbar value={time} maxValue={1500} text={`${convertHMS(time)}`} />
            )}
          </ChangingProgressProvider>

          <div className="button-box">
            <button onClick={this.hideTimer}></button>
          </div>

          <style>{`

            .CircularProgressbar {
              margin: 0 auto;
              width: 85%;
              margin-top: 5vh;
              margin-left: 8%;
            }

            .CircularProgressbar .CircularProgressbar-path {
              stroke: #f56942;
              stroke-linecap: round;
              transition: stroke-dashoffset 0.5s ease 0s;
            }

            .CircularProgressbar .CircularProgressbar-trail {
              stroke: #d6d6d6;
              stroke-linecap: round;
            }

            .CircularProgressbar .CircularProgressbar-text {
              fill: #f56942;
              font-family: Roboto, sans-serif;
              font-size: 20px;
              dominant-baseline: middle;
              text-anchor: middle;
            }

            .CircularProgressbar .CircularProgressbar-background {
              fill: #f56942;
            }

            button {
              width: 40px;
              height: 40px;
              border-style: solid;
              border-width: 37px;
              border-color: #f56942;
              border-width: 0px 0px 0px 37px;
              background: transparent;
              margin-top: 22%;
              margin-left: 24%;
            }

            .button-box {
              border: 5px solid #f56942;
              border-radius: 100px;
              width: 70px;
              height: 70px;
              margin: 0 auto;
              display: block;
              margin-top: 5vh;
              margin-bottom: 5vh;
            }

          `}</style>
        
        </div>
      );

    } else {

      return (

        <div className="button-box">
          <button onClick={this.showTimer}></button>

          <style>{`
            button {
              width: 30vw;
              height: 30vw;
              border-style: solid;
              box-sizing: border-box;
              border-width: 15vw 0px 15vw 30vw;
              border-color: transparent transparent transparent #f56942;
              background: transparent;
              margin-top: 25%;
              margin-left: 30%;
            }

            .button-box {
              border: 15px solid #f56942;
              border-radius: 200px;
              width: 60vw;
              height: 60vw;
              margin: 0 auto;
              margin-top: 5vh;
              margin-bottom: 5vh;
            }

          `}</style>
        </div>
      );

    }
  }
}

function convertHMS(value) {
  const sec = parseInt(value, 10);
  let minutes = Math.floor(sec / 60);
  let seconds = sec - (minutes * 60);
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  return minutes + ':' + seconds;
}

export default Timer