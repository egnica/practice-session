import React from "react";

function Challenge006() {
  const isPalindrome = (str) => {
    const noCase = str.toLowerCase();
    const noCaseRev = str.toLowerCase().split("").reverse().join("");
    return noCase === noCaseRev ? true : false;
  };
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("RaceCar"));
  console.log(isPalindrome("hello")); 

  return (
    <div>
      <p>Challenge 006</p>
    </div>
  );
}

export default Challenge006;
