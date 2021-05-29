import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => {
        return (
          <div key={idx}>
            <h1>Name: {director.name}</h1>
            <p>Movies:</p>
            <ul>
              {director.movies.map((movie, idx) => {
                return <li key={idx}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Directors;
