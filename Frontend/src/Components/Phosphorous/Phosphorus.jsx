import { useEffect, useState } from "react";
import styles from "./Phosphorous.module.css";
function Phosphorus({ classCall, ValueCall }) {
  const [value, setValue] = useState("");
  const [clas, setClass] = useState("");
  let Value = Math.round(value * 10) / 10;

  console.log(clas);

  useEffect(() => {
    if (Value >= 0 && Value <= 3.0) {
      setClass(0);
    } else if (Value >= 3.1 && Value <= 6.5) {
      setClass(1);
    } else if (Value >= 6.6 && Value <= 10) {
      setClass(2);
    } else if (Value >= 10.1 && Value <= 13.5) {
      setClass(3);
    } else if (Value >= 13.6 && Value <= 17) {
      setClass(4);
    } else if (Value >= 17.1 && Value <= 20.5) {
      setClass(5);
    } else if (Value >= 20.6 && Value <= 24) {
      setClass(6);
    } else if (Value >= 24.1 && Value <= 27.5) {
      setClass(7);
    } else if (Value >= 27.6 && Value <= 31) {
      setClass(8);
    } else if (Value >= 31.1 && Value <= 34.6) {
      setClass(9);
    } else {
      setClass(9);
    }
    classCall(clas);
    ValueCall(Value);
  });

  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Phosphorus</legend>
        <input
          type="number"
          className="input"
          placeholder="Phosphorus"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </fieldset>
    </>
  );
}

export default Phosphorus;
