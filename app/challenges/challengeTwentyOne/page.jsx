"use client";
import React from "react";
import { useEffect } from "react";

function ChallengeTwentyOne() {
  const word = "mississippi";

  useEffect(() => {
    const result = {};
    for (let x = 0; x < word.length; x++) {
      if (!result[word[x]]) {
        result[word[x]] = 0;
      }

      result[word[x]] = result[word[x]] + 1;
    }
    let mostObj = { letter: null, times: 0 };
    Object.entries(result).forEach(([letter, times]) => {
      if (times > mostObj.times) {
        mostObj = { letter: letter, times: times };
      }
    });

    console.log(
      `Most common: ${mostObj.letter} (appears ${mostObj.times} times)`
    );
  }, []);

  return <div>ChallengeTwentyOne</div>;
}

export default ChallengeTwentyOne;
