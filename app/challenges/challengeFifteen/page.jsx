"use client";
import React from "react";
import { useEffect } from "react";

function ChallengeFifteen() {
  const orders = [
    { id: 1, item: "Laptop", status: "shipped" },
    { id: 2, item: "Phone", status: "processing" },
    { id: 3, item: "Book", status: "shipped" },
    { id: 4, item: "Headphones", status: "delivered" },
    { id: 5, item: "Keyboard", status: "processing" },
  ];

  //Group the orders by status.

  useEffect(() => {
    const result = {};
    orders.forEach(({ item, status }) => {
      if (!result[status]) {
        result[status] = [];
      }
      result[status].push(item);
    });

    console.log(result);
  }, []);

  return (
    <div>
      <p>Challenge Fifteen</p>
    </div>
  );
}

export default ChallengeFifteen;
