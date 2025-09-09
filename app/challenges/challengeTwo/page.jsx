"use client";
import React from "react";
import { useEffect, useState } from "react";

function challengeTwo() {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (pause ? prev : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <div style={{ padding: "30px" }}>
      challengeTwo
      <h2>challengeTwo</h2>
      <h3>Part 2: React Component Exercise</h3>
      <p>
        Prompt: Create a React component LiveCounter that: Displays a count.
        Increments once per second using useEffect. Has a pause/resume button.
        Follow-up questions: How does React’s rendering model work when state
        updates? How would you prevent unnecessary re-renders in a larger app?
      </p>
      <button
        style={{ padding: "10px", borderRadius: "10px" }}
        onClick={() => setPause(!pause)}
      >
        pause/resume
      </button>
      <p>{time}</p>
    </div>
  );
}

export default challengeTwo;
