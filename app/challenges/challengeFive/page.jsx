"use client";
import React, { useEffect, useState } from "react";

function ChallengeFive() {
  const data = [
    { id: 1, category: "fruit", item: "apple" },
    { id: 2, category: "fruit", item: "orange" },
    { id: 3, category: "veg", item: "carrot" },
  ];

  // Using map instead of an object
  const [transMap, setTransMap] = useState(new Map());

  useEffect(() => {
    const map = new Map();
    data.forEach((item) => {
      map.has(item.category)
        ? map.set(item.category, [...map.get(item.category), item.item])
        : map.set(item.category, [item.item]);
    });
    setTransMap(map);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Object Transformation</h2>
      {Array.from(transMap.entries()).map(([key, value]) => (
        <div key={key}>
          <strong>{key}</strong>: {value.join(", ")}
        </div>
      ))}
    </div>
  );
}

export default ChallengeFive;
