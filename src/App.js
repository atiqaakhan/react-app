import React, { useEffect } from "react";
import "./App.css";
import { useObserver } from "./helper/oberser";
import Card from "./components/Card";
import { generateRandomNumbers } from "./helper/generateRandomNumbers";

function App() {
  const [temperature, emitTemperature] = useObserver("N/A");
  const [airPressure, emitAirPressure] = useObserver("N/A");
  const [humidity, emitHumidity] = useObserver("N/A");

  useEffect(() => {
    emitTemperature(generateRandomNumbers(30));
    emitAirPressure(generateRandomNumbers(30));
    emitHumidity(generateRandomNumbers(30));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrap" data-testid="card-wrapper">
          <Card title="Temperature" dataEmitter={emitTemperature}>
            {temperature}
          </Card>
          <Card title="Air Pressure" dataEmitter={emitAirPressure}>
            {airPressure}
          </Card>
          <Card title="Humidity" dataEmitter={emitHumidity}>
            {humidity}
          </Card>
        </div>
      </header>
    </div>
  );
}

export default App;
