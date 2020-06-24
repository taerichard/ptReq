import React from "react";

export default function SearchBar(props) {
  const trainerList = props.trainers.map((t) => (
    <div>
      <li key={t.Id}>{t.FirstName}</li>
    </div>
  ));

  console.log("searchLink");
  return trainerList;
}
