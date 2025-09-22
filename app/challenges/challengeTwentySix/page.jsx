"use client";
import React from "react";
import { useState, useEffect } from "react";

function ChallengeTwentySix() {
  const num = [4, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3];
  const k = 3;
  const result = {};

  const numCheck = () => {
    num.forEach((item) => {
      if (!result[item]) {
        result[item] = 0;
      }
      result[item] = result[item] + 1;
    });
  };
  numCheck();
  const topK = Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);
  console.log(topK);

  return (
    <div>
      <p>test</p>
    </div>
  );
}

export default ChallengeTwentySix;
