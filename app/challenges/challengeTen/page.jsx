"use client";
import React from "react";
import { useState } from "react";
function ChallengeTen() {
  const [countObject, setCountObject] = useState({});

  const data = [
    { id: 1, category: "fruit", item: "apple" },
    { id: 2, category: "fruit", item: "orange" },
    { id: 3, category: "veg", item: "carrot" },
    { id: 4, category: "veg", item: "pea" },
    { id: 5, category: "fruit", item: "banana" },
  ];

  const objectBuilder = (list) => {
    let result = [];
    list.forEach(({ category, item }) => {
      const found = result.find((obj) => obj.category == category);

      if (found) {
        found.items = [...found.items, item];
      } else {
        result.push({ category: category, items: [item] });
      }
    });
    return result;
  };

  console.log(objectBuilder(data));
  return (
    <div>
      <h2>ChallengeTen</h2>

      <p>Return the category with the most items.</p>
    </div>
  );
}

export default ChallengeTen;
