"use client";
import React from "react";
import { useState, useEffect } from "react";

function Challenge001() {
  const [display, setDisplay] = useState([]);
  const arr = [4, 1, 1, 1, 2, 2, 3, 3, 3, 3];
  const k = 3;
  const solution = {};

  const countFunc = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0 || k <= 0) return [];
    arr.forEach((num, k) => {
      if (!solution[num]) {
        solution[num] = 0;
      }
      solution[num] = solution[num] + 1;
    });
  };

  countFunc(arr, k);

  const sorted = Object.entries(solution)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);

  useEffect(() => {
    sorted.forEach(([one, two]) => {
      setDisplay((prev) => [...prev, { key: one, value: two }]);
    });
  }, []);

  return (
    <main>
      <p> Challenge001</p>
      <br />

      <p>const arr = [4, 1, 1, 1, 2, 2, 3, 3, 3, 3];</p>
      <p>const k = 3;</p>
      <p>returns k as top number frequency in the array</p>
      <br />
      {display.map(({ key, value }) => {
        return (
          <p key={key}>
            num:{key} times:{value}
          </p>
        );
      })}
    </main>
  );
}

export default Challenge001;
