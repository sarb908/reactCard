import React from "react";

const Card = (props) => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <ul>
        {props.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default Card;
