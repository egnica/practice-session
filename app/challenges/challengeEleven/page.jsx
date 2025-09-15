"use client";
import React from "react";
import { useEffect } from "react";

function ChallengeEleven() {
  const data = [
    { id: 1, category: "fruit", item: "apple" },
    { id: 2, category: "fruit", item: "orange" },
    { id: 3, category: "veg", item: "carrot" },
    { id: 4, category: "fruit", item: "banana" },
    { id: 5, category: "veg", item: "broccoli" },
  ];
  useEffect(() => {
    const result = {};

    data.forEach(({ category, item }) => {
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(item);
    });

    console.log(result);
  }, []);

  return <div>ChallengeEleven</div>;
}

export default ChallengeEleven;
