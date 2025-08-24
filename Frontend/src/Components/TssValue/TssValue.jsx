import { useEffect, useState } from "react";
import styles from "./Tss.module.css";
function TssValue({ ClassCall, ValueCall }) {
  const [value, setValue] = useState("");
  const [clas, setClass] = useState(0);
  let Value = Math.round(value * 10) / 10;

  useEffect(() => {
    if (Value < 0.8) {
      setClass(0);
    } else if (Value >= 0.9 && Value <= 1.6) {
      setClass(1);
    } else if (Value >= 1.7 && Value <= 3.2) {
      setClass(2);
    } else if (Value >= 3.3 && Value <= 4) {
      setClass(3);
    } else if (Value >= 4.1 && Value <= 4.9) {
      setClass(4);
    } else if (Value >= 5 && Value <= 5.6) {
      setClass(5);
    } else if (Value >= 5.7 && Value <= 6.4) {
      setClass(6);
    } else if (Value >= 6.5 && Value <= 7.2) {
      setClass(7);
    } else if (Value >= 7.3 && Value <= 8) {
      setClass(8);
    } else if (Value > 8) {
      setClass(9);
    }

    ClassCall(clas);
    ValueCall(Value);
  });

  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">TSS Value</legend>
        <input
          type="number"
          className="input"
          placeholder="TSS:value"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </fieldset>
    </>
  );
}

export default TssValue;
