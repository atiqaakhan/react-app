import React, { useEffect } from "react";
import { dataMonitor } from "../helper/monitorData";

const Card = ({ children, dataEmitter, title }) => {
  useEffect(() => {
    dataMonitor(dataEmitter);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="item">
      <h3 data-testid="title">{title}</h3>
      <div data-testid="children">{children}</div>
    </div>
  );
};

export default Card;
