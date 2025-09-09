"use client";
import React from "react";

import { useEffect } from "react";

function ChallengeFive() {
  const data = [
    { id: 1, category: "fruit", item: "apple" },
    { id: 2, category: "fruit", item: "orange" },
    { id: 3, category: "veg", item: "carrot" },
  ];

  useEffect(() => {
    const transMap = new Map();
  }, []);

  return (
    <div>
      ChallengeFive
      <h2>Object Transformation</h2>
      <p></p>
    </div>
  );
}

export default ChallengeFive;
