"use client";
import React from "react";

function ChallengeSix() {
  const unique = (array) => {
    const newArray = [];

    for (let y = 0; y < array.length; y++) {
      let exists = false;

      // check if array[y] is already in newArray
      for (let x = 0; x < newArray.length; x++) {
        if (newArray[x] === array[y]) {
          exists = true;
          break; // stop checking, we found a match
        }
      }

      // if not found, push it
      if (!exists) {
        newArray.push(array[y]);
      }
    }

    return newArray;
  };
  console.log(unique([1, 2, 2, 3, 4, 4, 5]));

  return (
    <div>
      <h2>Challenge Six</h2>
      <p>
        Write a function that takes an array and returns a new array with
        duplicates removed.
      </p>
    </div>
  );
}

export default ChallengeSix;
