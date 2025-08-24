import { useEffect, useState } from "react";
import style from "./Pottasium.module.css";
function Pottassium({ classCall, ValueCall }) {
  const [value, setValue] = useState("");
  const [clas, setClass] = useState(0);
  let Value = Math.round(value * 1) / 1;

  useEffect(() => {
    if (Value >= 0 && Value <= 35) {
      setClass(0);
    } else if (Value >= 36 && Value <= 75) {
      setClass(1);
    } else if (Value >= 76 && Value <= 115) {
      setClass(2);
    } else if (Value >= 116 && Value <= 155) {
      setClass(3);
    } else if (Value >= 156 && Value <= 195) {
      setClass(4);
    } else if (Value >= 196 && Value <= 235) {
      setClass(5);
    } else if (Value >= 236 && Value <= 275) {
      setClass(6);
    } else if (Value >= 276 && Value <= 315) {
      setClass(7);
    } else if (Value >= 316 && Value <= 355) {
      setClass(8);
    } else if (Value >= 356 && Value <= 395) {
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
        <legend className="fieldset-legend">Pottassium</legend>
        <input
          type="number"
          className="input"
          placeholder="Pottassium"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </fieldset>
    </>
  );
}

export default Pottassium;
