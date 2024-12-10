import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputTemp, setInputTemp] = useState("");
  const [targetUnit, setTargetUnit] = useState("Fahrenheit");
  const [convertedTemp, setConvertedTemp] = useState("");
  const [error, setError] = useState("");

  const convertTemperature = () => {
    setError(""); // Reset error
    const temp = parseFloat(inputTemp);

    if (isNaN(temp)) {
      setError("Please enter a valid number (letters are not allowed).");
      setConvertedTemp("");
      return;
    }

    let result;
    if (targetUnit === "Celsius") {
      result = temp;
    } else if (targetUnit === "Fahrenheit") {
      result = (temp * 9) / 5 + 32;
    } else if (targetUnit === "Kelvin") {
      result = temp + 273.15;
    }

    setConvertedTemp(`${result.toFixed(2)} °${targetUnit.charAt(0)}`);
  };

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <input
        type="text"
        value={inputTemp}
        onChange={(e) => setInputTemp(e.target.value)}
        placeholder="Enter temperature"
        className="input-field"
      />
      <select
        value={targetUnit}
        onChange={(e) => setTargetUnit(e.target.value)}
        className="dropdown"
      >
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <button onClick={convertTemperature} className="convert-button">
        Convert
      </button>
      {error && <p className="error">{error}</p>}
      {convertedTemp && (
        <p className="result">
          Converted Temperature: {convertedTemp}
        </p>
      )}
    </div>
  );
}

export default App;
