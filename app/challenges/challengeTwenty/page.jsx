"use client";
import React from "react";
import { useEffect } from "react";
function ChallengeTwenty() {
  const word = "balloon";

  const result = {};
  for (let x = 0; x < word.length; x++) {
    if (!result[word[x]]) {
      result[word[x]] = 0;
    }

    result[word[x]] = result[word[x]] + 1;
  }
  console.log(result);
  return (
    <div>
      <p>Challenge Twenty</p>
    </div>
  );
}

export default ChallengeTwenty;
