import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./Testpage.css";

import { logics } from "../logics/logics";

const animatedComponents = makeAnimated();

const Crops = [
  { value: "COCONUT_WCT", label: "COCONUT_WCT", id: 1 },
  { value: "COCONUT_HYBIRD_WCT", label: "COCONUT_HYBIRD_WCT", id: 2 },
  {
    value: "COCONUT_HYBIRD_IRRIGATED",
    label: "COCONUT_HYBIRD_IRRIGATED",
    id: 3,
  },
  {
    value: "BANANA-LOCAL(Kadali,Poovan,Robusta)",
    label: "BANANA-LOCAL(Kadali,Poovan,Robusta)",
    id: 4,
  },
];
const Testpage = () => {
  const [PhClass, setPhClass] = useState(0);
  const [phValue, setPhValue] = useState(0);
  const [tssClass, setTssClass] = useState(0);
  const [tssValue, setTssValue] = useState(0);
  const [organicCarbon, setOrganicCarbon] = useState(0);
  const [organicCarbonClass, setOrganicCarbonClass] = useState(0);
  const [phosphorous, setPhosphorous] = useState(0);
  const [phosphorousClass, setPhosphorousClass] = useState(0);
  const [pottasium, setPottasium] = useState(0);
  const [pottasiumClass, setPottasiumClass] = useState(0);
  const [soilType, setsoilType] = useState(0);
  const [crops, setCrop] = useState(0);
  const logic = new logics();

  function handleChange(crop) {
    setCrop(crop);
    console.log(crops);
  }
  async function handlesubmit() {
    if (
      !phValue ||
      !tssValue ||
      !organicCarbon ||
      !phosphorous ||
      !pottasium ||
      !soilType
    ) {
      toast("Select All Fields");
      return;
    }
    setPhClass(logic.PhClassFind(phValue));
    setTssClass(logic.TssClassFind(tssValue));
    setOrganicCarbonClass(
      logic.OrganicCarbonClassFind(organicCarbon, soilType)
    );

    setPottasiumClass(logic.pottassiumClassFind(pottasium));

    console.log("Phosphoros class: ", phosphorousClass);
    crops.forEach((crop) => {
      console.log(
        logic.CropNutrientCalculator(
          organicCarbonClass,
          phosphorousClass,
          pottasiumClass,
          crop.value
        )
      );
    });
  }

  return (
    <>
      <div id="container">
        <div id="values">
          <div className="value">
            <div className="text">
              <p className="textvalue">Enter Ph value: </p>
            </div>
            <div className="inputvalue">
              <input
                type="number"
                value={phValue}
                placeholder="Type here"
                className="input"
                onChange={(e) => {
                  setPhValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="value">
            <div className="text">
              <p className="textvalue">Enter TSS value: </p>
            </div>
            <div className="inputvalue">
              <input
                type="number"
                value={tssValue}
                placeholder="Type here"
                className="input"
                onChange={(e) => {
                  setTssValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="value">
            <div className="text">
              <p className="textvalue">Enter Organic Carbon Value: </p>
            </div>
            <div className="inputvalue">
              <input
                type="number"
                value={organicCarbon}
                placeholder="Type here"
                className="input"
                onChange={(e) => {
                  setOrganicCarbon(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="value">
            <div className="text">
              <p className="textvalue">Soil-Type</p>
            </div>
            <div className="inputbtn">
              <button
                className="btn"
                onClick={(e) => {
                  setsoilType("clay");
                }}
              >
                Clay
              </button>
              <button
                className="btn"
                onClick={(e) => {
                  setsoilType("sandy");
                }}
              >
                Sandy
              </button>
            </div>
          </div>
          <div className="value">
            <div className="text">
              <p className="textvalue">Enter Pottasium Value: </p>
            </div>
            <div className="inputvalue">
              <input
                type="number"
                value={pottasium}
                placeholder="Type here"
                className="input"
                onChange={(e) => {
                  setPottasium(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="value">
            <div className="text">
              <p className="textvalue">Enter Phosphorous Value: </p>
            </div>
            <div className="inputvalue">
              <input
                type="number"
                value={phosphorous}
                placeholder="Type here"
                className="input"
                onChange={(e) => {
                  setPhosphorous(e.target.value);
                  setPhosphorousClass(
                    logic.PhosphorousClassFind(e.target.value)
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div id="cropSelect">
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            className="w-100"
            options={Crops}
            onChange={handleChange}
          ></Select>
          <button className="btn" onClick={handlesubmit}>
            Submit
          </button>
          <Toaster></Toaster>
        </div>
      </div>
    </>
  );
};

export default Testpage;
