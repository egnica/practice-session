"use client";
import React from "react";
import { useEffect } from "react";
function ChallengeThirteen() {
  const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];

  useEffect(() => {
    const result = {};
    words.forEach((item) => {
      if (!result[item]) {
        result[item] = 0;
      }
      result[item]++;
    });
    console.log(result);
  }, []);

  return (
    <div>
      <p>ChallengeThirteen</p>
    </div>
  );
}

export default ChallengeThirteen;
