"use client";
import React from "react";
import { useEffect } from "react";

function ChallengeTwentyTwo() {
  const ratings = [
    { movie: "Inception", rating: 5 },
    { movie: "Avatar", rating: 4 },
    { movie: "Inception", rating: 3 },
    { movie: "Titanic", rating: 4 },
    { movie: "Avatar", rating: 5 },
    { movie: "Inception", rating: 4 },
  ];

  useEffect(() => {
    const result = {};
    const aveRating = {};
    let highestRated = { movie: null, rank: 0 };

    ratings.forEach((item) => {
      if (!result[item.movie]) {
        result[item.movie] = [];
      }

      result[item.movie].push(item.rating);
    });

    Object.entries(result).forEach(([movie, rateArr]) => {
      let sum = 0;

      rateArr.forEach((num) => {
        sum += num;
      });

      const times = rateArr.length;
      aveRating[movie] = sum / times;
    });
    Object.entries(aveRating).forEach(([movie, ave]) => {
      if (ave > highestRated.rank) {
        highestRated = { movie: movie, rank: ave };
      }
    });

    const sortedRank = Object.entries(aveRating).sort((a, b) => {
      return b[1] - a[1];
    });

    console.log(result);
    console.log(aveRating);
    console.log(highestRated);
    console.log(sortedRank);
  }, []);

  return <div>ChallengeTwentyTwo</div>;
}

export default ChallengeTwentyTwo;
