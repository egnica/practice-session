"use client";
import React from "react";
import { useEffect } from "react";
function ChallengeSeventeen() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const result = {};
    

    numbers.forEach((num) => {
      if (!result["even"] && num % 2 == 0) {
        result["even"] = [];
      } else if (!result["odd"]) {
        result["odd"] = [];
      }

      if (num % 2 == 0) {
        result["even"].push(num);
      } else {
        result["odd"].push(num);
      }
    });
    console.log(result);
  }, []);

  return (
    <div>
      <p>Challenge Seventeen</p>
    </div>
  );
}

export default ChallengeSeventeen;
