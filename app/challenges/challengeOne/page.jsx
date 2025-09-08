"use client";
import React from "react";
import { useEffect, useState } from "react";

function challengeOne() {
  const [highest, setHighest] = useState("");
  const mostFrequent = ["a", "b", "a", "c", "b", "a"];

  useEffect(() => {
    let check = [];

    mostFrequent.forEach((item) => {
      const object = check.find((checkThis) => checkThis.letter == item);

      if (object) {
        object.count = object.count + 1;
      } else {
        check.push({ letter: item, count: 1 });
      }
    });

    const max = check.reduce(
      (acc, item) => (item.count > acc.count ? item : acc),
      { letter: "", count: 0 }
    );
    setHighest(max);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Challenge One</h2>
      <p>["a", "b", "a", "c", "b", "a"]</p>
      <p>Given an array of strings, return the most frequent string.</p>
      <hr />
      {
        <p>
          {highest.letter} : {highest.count}
        </p>
      }
    </div>
  );
}

export default challengeOne;
