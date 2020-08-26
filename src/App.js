import React from "react";
import "./App.css";
import { useObservable } from "./helper/Observable";
import Card from "./components/Card";

function App() {
  const [temperature] = useObservable("N/A");
  const [airPressure] = useObservable("N/A");
  const [humidity] = useObservable("N/A");

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrap" data-testid="card-wrapper">
          <Card title="Temperature">{temperature}</Card>
          <Card title="Air Pressure">{airPressure}</Card>
          <Card title="Humidity">{humidity}</Card>
        </div>
      </header>
    </div>
  );
}

export default App;
