import React from "react";

const Card = ({ children, title }) => {
  return (
    <div className="item">
      <h3 data-testid="title">{title}</h3>
      <div data-testid="children">{children}</div>
    </div>
  );
};

export default Card;
