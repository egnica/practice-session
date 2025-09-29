import React from "react";

function Challenge005() {
  const reverseString = (str) => {
    let newArr = [];
    let strArray = str.split("");
    let length = str.length - 1;
    while (length >= 0) {
      newArr.push(strArray[length]);
      length = length - 1;
    }

    let newString = newArr.join("");
    console.log(newString);
  };

  const reverseString2 = (str) => {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  };

  reverseString("hello"); // "olleh"
  reverseString("Javascript"); // "tpircsavaJ"
  return (
    <div>
      <p>Challenge 005</p>
    </div>
  );
}

export default Challenge005;
