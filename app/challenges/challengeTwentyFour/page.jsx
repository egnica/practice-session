"use client";
import React from "react";

function ChallengeTwentyFour() {
  const library = [
    { title: "1984", genre: "Dystopian", borrowedBy: "Bob" },
    { title: "The Hobbit", genre: "Fantasy", borrowedBy: "Alice" },
    {
      title: "The Fellowship of the Ring",
      genre: "Fantasy",
      borrowedBy: "Charlie",
    },
    { title: "Brave New World", genre: "Dystopian", borrowedBy: "Alice" },
    { title: "The Two Towers", genre: "Fantasy", borrowedBy: "Alice" },
    { title: "The Return of the King", genre: "Fantasy", borrowedBy: "Bob" },
  ];

  const groupByGenre = () => {
    const result = {};

    library.forEach((item) => {
      if (!result[item.genre]) {
        result[item.genre] = [];
      }
      result[item.genre].push(item.title);
    });

    console.log(result);
  };

  groupByGenre();

  const booksPerson = () => {
    const result = {};
    let topPerson = {};

    library.forEach((item) => {
      if (!result[item.borrowedBy]) {
        result[item.borrowedBy] = 0;
      }
      result[item.borrowedBy] = result[item.borrowedBy] + 1;
    });

    console.log(result);

    const sortObj = Object.entries(result).sort((a, b) => b[1] - a[1]);
    const [user, count] = sortObj[0];
    topPerson = { person: user, books: count };

    console.log(topPerson);
  };
  booksPerson();

  return (
    <div>
      <p>Challenge Twenty Four</p>
    </div>
  );
}

export default ChallengeTwentyFour;
