"use client";
import React from "react";

function Challenge003() {
  const stringArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const newObj = {};

  const anagramFunc = (arr) => {
    arr.forEach((str) => {
      const newString = str.split("").sort().join("");

      if (!newObj[newString]) {
        newObj[newString] = [];
      }

      newObj[newString].push(str);
    });
  };

  anagramFunc(stringArr);

  return (
    <div>
      <p>Challenge 003</p>
      {Object.entries(newObj).map(([key, value]) => {
        return (
          <p key={key}>
            {key} : {value.join(", ")}
          </p>
        );
      })}
    </div>
  );
}

export default Challenge003;
