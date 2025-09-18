"use client";
import React from "react";
import { useEffect, useState } from "react";
function ChallengeEighteen() {
  const [resultObj, setResultObj] = useState({});

  const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
    { name: "David", grade: "C" },
    { name: "Eve", grade: "B" },
  ];

  useEffect(() => {
    const result = {};
    students.forEach(({ grade, name }) => {
      if (!result[grade]) {
        result[grade] = [];
      }
      result[grade].push(name);
    });

    setResultObj(result);
  }, []);

  return (
    <div>
      <p>Challenge Eighteen</p>
      {Object.entries(resultObj).map(([grade, names], index) => (
        <p key={index}>
          {grade} : {names.join(", ")}
        </p>
      ))}
    </div>
  );
}

export default ChallengeEighteen;
