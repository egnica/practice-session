import React from "react";

function Challenge004() {
  const parenString = "}{{[]}()";
  const newObj = {};

  const parenFunc = (str) => {
    str.split("").forEach((char, index) => {
      if (!newObj[char]) {
        newObj[char] = [];
      }
      newObj[char].push(index, char);
    });
  };

  function isValid(s) {
    const match = { "(": ")", "[": "]", "{": "}" };
    const stack = [];

    for (const ch of s) {
      if (ch in match) {
        // opening: push the expected closer
        stack.push(match[ch]);
      } else {
        // closing: must match the last expected closer
        if (stack.pop() !== ch) return false;
      }
    }

    return stack.length === 0;
  }

  parenFunc(parenString);
  console.log(newObj);
  return (
    <div>
      <p>Challenge 004</p>
    </div>
  );
}

export default Challenge004;
