import React from "react";

function ChallengeTwentyThree() {
  const carts = [
    { user: "Bob", item: "Phone", price: 800 },
    { user: "Alice", item: "Mouse", price: 50 },
    { user: "Alice", item: "Keyboard", price: 100 },
    { user: "Bob", item: "Headphones", price: 200 },
    { user: "Charlie", item: "Monitor", price: 300 },
    { user: "Alice", item: "Laptop", price: 1200 },
  ];

  const result = {};
  const totalS = {};
  const GroupUserPrice = () => {
    carts.forEach((item) => {
      if (!result[item.user]) {
        result[item.user] = [];
      }
      result[item.user].push(item.price);
    });
    console.log(result);
  };

  const totalSpent = () => {
    Object.entries(result).forEach(([name, priceArr]) => {
      let total = 0;
      priceArr.forEach((price) => {
        total = price + total;
        totalS[name] = total;
      });
    });
    console.log(totalS);
  };

  const highestSpend = () => {
    const sortObj = Object.entries(totalS).sort((a, b) => b[1] - a[1]);
    console.log(sortObj[0]);
  };

  const highestSpendSort = () => {
    const sortObj = Object.entries(totalS).sort((a, b) => b[1] - a[1]);
    console.log(sortObj);
  };

  GroupUserPrice(carts);
  totalSpent();
  highestSpend();
  highestSpendSort();
  return <div>ChallengeTwentyThree</div>;
}

export default ChallengeTwentyThree;
