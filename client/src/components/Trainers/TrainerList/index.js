import React from "react";
import { ListGroup } from "react-bootstrap";
import "../../../styles.css";

function Search(props) {
  return (
    <div>
      <ListGroup>
        {props.trainers.map((t) => {
          return (
            <ListGroup.Item key={t.id}>
              <h1>Trainer Info</h1>
              <ListGroup.Item>
                <h6>Name: </h6>
                {t.firstName + " " + t.lastName}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>Email: </h6> {t.email}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>City: </h6> {t.city}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <h6>State: </h6>
                {t.state}
              </ListGroup.Item>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Search;
