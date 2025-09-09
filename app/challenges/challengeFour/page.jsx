"use client";
import React from "react";
import { useState, useEffect } from "react";

function ChallengeFour() {
  const [twoNumbers, setTwoNumbers] = useState({ num1: 0, num2: 0 });

  useEffect(() => {
    const twoSum = (arr, target) => {
      for (let x = 0; x < arr.length; x++) {
        for (let i = x; i < arr.length; i++) {
          if (arr[x] + arr[i] == target) {
            setTwoNumbers({ num1: arr[x], num2: arr[i] });
          }
        }
      }
    };
    twoSum([2, 7, 11, 15], 9);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      ChallengeFour
      <h2>Two-Sum</h2>
      <p>
        Given an array of numbers and a target, return the first two numbers
        that sum to the target.
      </p>
      <p>twoSum([2, 7, 11, 15], 9); </p>
      <p>
        {twoNumbers.num1} | {twoNumbers.num2}
      </p>
      <hr />
    </div>
  );
}

export default ChallengeFour;
