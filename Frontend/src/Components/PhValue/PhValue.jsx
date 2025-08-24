import { useEffect, useState } from "react";
import style from "./PhValue.module.css";
function PhValue({ classCall, ValueCall, phValue, phClass }) {
  const [name, setName] = useState("");
  const [clas, setClass] = useState("");
  let Name = Math.round(name * 10) / 10;
  useEffect(() => {
    if (name < 4.0) {
      setClass(0);
    } else if (Name >= 4.1 && Name <= 4.5) {
      setClass(1);
    } else if (Name >= 4.6 && Name <= 5.0) {
      setClass(2);
    } else if (Name >= 5.1 && Name <= 5.5) {
      setClass(3);
    } else if (Name >= 5.6 && Name <= 6) {
      setClass(4);
    } else if (Name >= 6.1 && Name <= 6.5) {
      setClass(5);
    } else if (Name >= 6.6 && Name <= 7) {
      setClass(6);
    } else if (Name >= 7.1 && Name <= 7.5) {
      setClass(7);
    } else if (Name >= 7.6 && Name <= 8) {
      setClass(8);
    } else if (Name >= 8.1 && Name <= 10) {
      setClass(9);
    }
    classCall(clas);
    ValueCall(Name);
  });

  return (
    <>
      <div className={style.container}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">PH:Value</legend>
          <input
            type="number"
            className="input"
            placeholder="PH:Value"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </fieldset>
      </div>
    </>
  );
}

export default PhValue;
