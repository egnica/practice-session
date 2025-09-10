"use client";
import React from "react";

function ChallengeSeven() {
  const reverseWords = (words) => {
    const wordsArray = words.split(" ").reverse().join(" ");

    console.log(wordsArray);
  };

  reverseWords("hello world from react");

  return (
    <div>
      <h2>ChallengeSeven</h2>
      <p>Given a string, reverse the order of words.</p>
    </div>
  );
}

export default ChallengeSeven;
