import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [result, setResult] = useState("");

  const convertToRoman = () => {
    let table = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I",
    };

    let romanNum = "";
    let decimal = parseInt(state);
    let decimalArr = Object.keys(table).reverse();
    let romanArr = Object.values(table).reverse();
    if (decimal > 0) {
      for (let i = 0; i < decimalArr.length; i++) {
        while (decimalArr[i] <= decimal) {
          romanNum += romanArr[i];
          decimal -= decimalArr[i];
        }
      }
    }
    setResult(romanNum);
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <div className="container">
      <h1>Roman Numeral Calculator</h1>
      <div className="input">
        <h4>Input Decimal Number</h4>
        <textarea id="input" onChange={handleChange}>
          {state}
        </textarea>
        <button onClick={convertToRoman}>Convert</button>
      </div>
      <div className="output">{result}</div>
    </div>
  );
}
export default App;
