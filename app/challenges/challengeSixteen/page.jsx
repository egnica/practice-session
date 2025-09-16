"use client";
import React from "react";
import { useEffect, useState } from "react";

function ChallengeSix() {
  const [result, setResult] = useState({});

  // 1. Array of objects
  const parks = [
    { id: 1, park: "Yellowstone" },
    { id: 2, park: "Yosemite" },
    { id: 3, park: "Grand Canyon" },
    { id: 4, park: "Zion" },
    { id: 5, park: "Rocky Mountain" },
  ];

  // 2. Parallel array of ranks
  const ranks = [3, 1, 5, 2, 4];

  useEffect(() => {
    const result = {};
    ranks.forEach((rank, index) => {
      if (!result[rank]) {
        result[rank] = parks[index].park;
      }
    });
    setResult(result);
  }, []);

  return (
    <div>
      <p>Challenge Six</p>
      {Object.values(result).map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default ChallengeSix;
