import React from "react";
//import { ListGroup } from "react-bootstrap";
import "../../styles.css";

function TrainerList(props) {
  console.log("props", props);
  const trainers = props.trainers.map((trainer, i) => {
    return (
      <div>
        <h2>FirstName: {trainer.firstName}</h2>
        <h2>Last Name: {trainer.lastName}</h2>
        <h2>Email:{trainer.email}</h2>
      </div>
    );
  });

  return <div>{trainers}</div>;
}

export default TrainerList;
