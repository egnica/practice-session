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
    data.forEach((item) => {
      transMap.has(item.category)
        ? transMap.set(item.category, [
            ...transMap.get(item.category),
            item.item,
          ])
        : transMap.set(item.category, [item.item]);
    });
    console.log(transMap);
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
