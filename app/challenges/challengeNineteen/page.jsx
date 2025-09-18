"use client";
import React from "react";
import { useEffect } from "react";
function ChallengeNineteen() {
  const numbers = [3, 8, 15, 22, 29, 31, 42, 47, 53];

  useEffect(() => {
    const result = {};

    numbers.forEach((num) => {
      const testNum = num.toString();

      let key = "";

      if (testNum.length < 2) {
        key = "0-9";
      } else {
        key = testNum[0] + 0 + "-" + testNum[0] + "9";
      }

      if (!result[key]) {
        result[key] = [];
      }

      if (testNum.length < 2) {
        result[key].push(num);
      } else if (testNum[0] == key[0]) {
        result[key].push(num);
      }
    });
    console.log(result);
  }, []);

  useEffect(() => {
    const result = {};

    numbers.forEach((num) => {
      const start = Math.floor(num / 10) * 10;
      const end = start + 9;
      const key = `${start}-${end}`;

      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(num);
    });

    console.log(result);
  }, []);

  return (
    <div>
      <p>Challenge Nineteen</p>
    </div>
  );
}

export default ChallengeNineteen;
