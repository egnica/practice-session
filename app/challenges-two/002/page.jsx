"use client";
import React from "react";

function Challenge002() {
  const numArray = [1, 2, 3, 4];
  const newArray = [];

  const productFunc = (numArr) => {
    let count = 0;
    while (count < numArr.length) {
      let total = [];

      numArr.forEach((item, index) => index != count && total.push(item));

      let multiply = total.reduce((acc, curr) => {
        return acc * curr;
      }, 1);
      newArray.push(multiply);

      count++;
    }
  };

  productFunc(numArray);
  console.log(newArray);

  //CHAT GPT
  function productExceptSelf(nums) {
    const n = nums.length;
    const out = Array(n).fill(1);

    // pass 1: prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
      out[i] = prefix; // product of everything to the left
      prefix *= nums[i]; // update prefix
    }

    // pass 2: suffix products
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
      out[i] *= suffix; // multiply by product of everything to the right
      suffix *= nums[i]; // update suffix
    }

    return out;
  }
  console.log(productExceptSelf([1, 2, 3, 4]));

  return (
    <div>
      <p>Challenge 002</p>
    </div>
  );
}

export default Challenge002;
