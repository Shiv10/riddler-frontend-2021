import "./Timer.css"
import React, { useEffect, useState } from "react";
// import p5 from "p5";


function Timer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-8-20`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  // Object.keys(timeLeft).forEach((interval) => {
  //   if (!timeLeft[interval]) {
  //     return;
  //   }

  //   timerComponents.push(
  //     <span className="timer-card">
  //       {timeLeft[interval]} {interval}{" "}

  //     </span>
  //   );
  // });
  timerComponents.push(
    <div id="countdown" className="timers">
      <div className="timer-card">
        {timeLeft.days} {" "} {"days"}
      </div>
      <div className="timer-card">
        {timeLeft.hours} {" "} {"hours"}
      </div>
      <div className="timer-card">
        {timeLeft.minutes} {" "} {"minutes"}
      </div>
    </div>

  );


  //logo bounce


  //logo bounce

  return (

    <div className="timer-bg">
      <div className="TimerContainer">

        <div class="section section-timer" data-anchor="timer">
          <div class="container">
            <h1 id="headline">STARTS IN</h1>
            <br />
            <div id="timer">
              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
          </div>
        </div>

        <div className="HomeBtnWrapper">
          <button className="reg_button" to="/register">REGISTER</button>
        </div>

      </div>
    </div>
  );
}

export default Timer;