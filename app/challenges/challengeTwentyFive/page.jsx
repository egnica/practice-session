import React from "react";

function ChallengeTwentyFive() {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 68 },
    { name: "David", grade: 74 },
    { name: "Eve", grade: 99 },
  ];

  const passingGrade = () => {
    const result = {};
    const letterGrade = [];
    const studentLetter = {};

    students.forEach((item) => {
      if (item.grade >= 70) {
        result[item.name] = item.grade;
      }
    });
    console.log(result);
    Object.entries(result).forEach(([key, value]) => {
      if (value > 89) {
        letterGrade.push({ name: key, letter: "A" });
      } else if (value > 79) {
        letterGrade.push({ name: key, letter: "B" });
      } else {
        letterGrade.push({ name: key, letter: "C" });
      }
    });

    console.log(letterGrade);

    letterGrade.forEach((item) => {
      if (!studentLetter[item.letter]) {
        studentLetter[item.letter] = 0;
      }
      studentLetter[item.letter] = studentLetter[item.letter] + 1;
    });

    console.log(studentLetter);

    const sortScore = [...students].sort((a, b) => b.grade - a.grade);

    console.log(sortScore);
  };

  passingGrade();

  return (
    <div>
      <p>Challenge Twenty Five</p>
    </div>
  );
}

export default ChallengeTwentyFive;
