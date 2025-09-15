"use client";
import React from "react";
import { useEffect } from "react";

function ChallengeTwelve() {
  const words = ["apple", "banana", "apricot", "blueberry", "cherry"];

  useEffect(() => {
    const wordObj = {};

    words.forEach((word) => {
      const letter = word[0].toLowerCase(); // 👈 the key we care about

      if (!wordObj[letter]) {
        // if this letter key doesn't exist yet
        wordObj[letter] = []; // create it as an empty array
      }

      wordObj[letter].push(word); // always push the current word
      console.log(wordObj); // see how it grows step by step
    });

    console.log("Final:", wordObj);
  }, []);

  return (
    <div>
      <p>ChallengeTwelve</p>
    </div>
  );
}

export default ChallengeTwelve;
