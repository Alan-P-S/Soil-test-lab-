import { useEffect, useState } from "react";
import styles from "./OrganicCarbon.module.css";
function OrganicCarbon({ classCall, ValueCall }) {
  const [soilType, setSoilType] = useState("");
  const [value, setValue] = useState("");
  const [clas, setClass] = useState(0);

  let Value = Math.round(value * 100) / 100;

  useEffect(() => {
    console.log("Hii");
    if (soilType == "sandy") {
      //   console.log("sandy");
      if (Value >= 0.0 && Value <= 0.1) {
        setClass(0);
      } else if (Value >= 0.11 && Value <= 0.2) {
        setClass(1);
      } else if (Value >= 0.21 && Value <= 0.3) {
        setClass(2);
      } else if (Value >= 0.31 && Value <= 0.45) {
        setClass(3);
      } else if (Value >= 0.46 && Value <= 0.6) {
        setClass(4);
      } else if (Value >= 0.61 && Value <= 0.75) {
        setClass(5);
      } else if (Value >= 0.76 && Value <= 0.9) {
        setClass(6);
      } else if (Value >= 0.91 && Value <= 1.1) {
        setClass(7);
      } else if (Value >= 1.11 && Value <= 1.3) {
        setClass(8);
      } else if (Value >= 1.31 && Value <= 1.5) {
        setClass(9);
      } else {
        setClass(9);
      }
    } else if (soilType == "clay") {
      if (Value >= 0.0 && Value <= 0.16) {
        setClass(0);
      } else if (Value >= 0.17 && Value <= 0.33) {
        setClass(1);
      } else if (Value >= 0.34 && Value <= 0.5) {
        setClass(2);
      } else if (Value >= 0.51 && Value <= 0.75) {
        setClass(3);
      } else if (Value >= 0.76 && Value <= 1) {
        setClass(4);
      } else if (Value >= 1.01 && Value <= 1.25) {
        setClass(5);
      } else if (Value >= 1.26 && Value <= 1.5) {
        setClass(6);
      } else if (Value >= 1.51 && Value <= 1.83) {
        setClass(7);
      } else if (Value >= 1.84 && Value <= 2.16) {
        setClass(8);
      } else if (Value >= 2.17 && Value <= 2.5) {
        setClass(9);
      } else {
        setClass(9);
      }
    }
    classCall(clas);
    ValueCall(Value);
    console.log("class" + clas);
  }, [value, soilType]);

  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Organic Carbon</legend>
        <input
          type="number"
          className="input"
          placeholder="Organic Carbon"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </fieldset>
      <div className="flex p-0.1 gap-2 flex-col">
        <p className="font-normal content-center">Soil type: </p>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            setSoilType("sandy");
          }}
        >
          Sandy
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            setSoilType("clay");
          }}
        >
          Clay
        </button>
        <p className="content-center mx-auto font-semibold">{soilType}</p>
      </div>
    </>
  );
}

export default OrganicCarbon;
