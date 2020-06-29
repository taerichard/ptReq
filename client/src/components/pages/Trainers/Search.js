import React from "react";

function Search(props) {
  return (
  <div>
    <ul>
      {props.trainers.map((t) => {
        return <li key={t.Id}>{t.firstName + " " + t.lastName}</li>;
      })}
    </ul>
    </div>
  );
}

export default Search;
