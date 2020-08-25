import { useState, useEffect } from "react";
import { EventEmitter } from "events";

export const useObserver = (initialState) => {
  const [data, setData] = useState(initialState);
  const emitter = new EventEmitter();

  const eventlistner = () => {
    emitter.on("data", (value) => {
      if (value) {
        setData(value);
      }
    });
  };

  const eventEmitter = (value) => {
    emitter.emit("data", value);
  };

  useEffect(() => {
    eventlistner();
    // eslint-disable-next-line
  }, []);

  return [data, eventEmitter];
};
