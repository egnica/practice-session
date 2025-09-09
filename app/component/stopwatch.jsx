"use client";
import React from "react";
import { useState, useEffect } from "react";

function stopwatch() {
  const [time, setTime] = useState(0);
  const [timeControl, setTimeControl] = useState("start");

  useEffect(() => {
    const timer = setInterval(() => {
      timeControl == "start"
        ? setTime((prev) => prev + 1)
        : timeControl == "stop"
        ? setTime((prev) => prev)
        : setTime(0);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeControl]);

  return (
    <div>
      <p>{timeControl}</p>
      <h2>Stopwatch</h2>
      <p>{time}</p>
      <button onClick={() => setTimeControl("start")}>Start</button>
      <button onClick={() => setTimeControl("stop")}>Stop</button>
      <button onClick={() => setTimeControl("reset")}>Reset</button>
    </div>
  );
}

export default stopwatch;
