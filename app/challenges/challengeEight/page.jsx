import React from "react";

function ChallengeEight() {
  const data = [
    { id: 1, category: "fruit", item: "apple" },
    { id: 2, category: "fruit", item: "orange" },
    { id: 3, category: "veg", item: "carrot" },
  ];

  const dataMap = new Map();

  const transform = (obj) => {
    obj.forEach((item) => {
      dataMap.has(item.category)
        ? dataMap.get(item.category).push(item.item)
        : dataMap.set(item.category, [item.item]);
    });
  };

  transform(data);

  console.log(dataMap);
  return (
    <div>
      <h2>ChallengeEight</h2>
      <p>Transforming objects in an array</p>
    </div>
  );
}

export default ChallengeEight;
