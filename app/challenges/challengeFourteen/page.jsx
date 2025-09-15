"use client";
import React from "react";
import { useEffect } from "react";

function ChallengeFourteen() {
  const people = [
    { name: "Alice", age: 23 },
    { name: "Bob", age: 31 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 35 },
    { name: "Eve", age: 42 },
    { name: "Frank", age: 100 },
  ];

  useEffect(() => {
    const result = {};

    people.forEach(({ name, age }) => {
      const decade = Math.floor(age / 10) * 10 + "s";
      if (!result[decade]) {
        result[decade] = [];
      }
      result[decade].push(name);
    });
    console.log(result);
  }, []);

  return (
    <div>
      <p>Challenge Fourteen</p>
    </div>
  );
}

export default ChallengeFourteen;
