"use client";
import React from "react";
import { useState, useEffect } from "react";
function challengeNine() {
  const [counter, setCounter] = useState({ min: 11, sec: 0 });
  const [timerControl, setTimerControl] = useState("stop");

  useEffect(() => {
    if (timerControl == "start") {
      const timer = setInterval(() => {
        setCounter((prev) => {
          return prev.sec == 0
            ? { min: prev.min - 1, sec: 59 }
            : { ...prev, sec: prev.sec - 1 };
        });
      }, 1000);

      return () => clearInterval(timer);
    } else if (timerControl == "stop") {
      setCounter({ min: counter.min, sec: counter.sec });
    } else {
      setCounter({ min: 11, sec: 0 });
    }
  }, [timerControl]);

  return (
    <div>
      <h2>Challenge Nine</h2>
      <p>
        Create a timer that counts down from 11 mins to zero. have a button to
        stop, start and reset
      </p>
      <div>
        <p>
          {counter.min}:{counter.sec}
        </p>
        <button onClick={() => setTimerControl("start")}>Start</button>
        <button onClick={() => setTimerControl("stop")}>Stop</button>
        <button onClick={() => setTimerControl("reset")}>Reset</button>
      </div>
      <hr />
    </div>
  );
}

export default challengeNine;
