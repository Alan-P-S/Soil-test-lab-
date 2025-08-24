import { useState, useEffect } from "react";
import Phosphorus from "../Phosphorous/Phosphorus";
import Pottassium from "../Pottasium/Pottassium";

function NutrientCalculator({
  cropName,
  CarbonClass,
  PhosphorusClass,
  PottassiumClass,
}) {
  const generalRecommend = [
    { Nitrogen: 128, Phosphorus: 128, Pottassium: 128 },
    { Nitrogen: 117, Phosphorus: 117, Pottassium: 117 },
    { Nitrogen: 106, Phosphorus: 106, Pottassium: 106 },
    { Nitrogen: 97, Phosphorus: 94, Pottassium: 94 },
    { Nitrogen: 91, Phosphorus: 83, Pottassium: 83 },
    { Nitrogen: 84, Phosphorus: 71, Pottassium: 71 },
    { Nitrogen: 78, Phosphorus: 60, Pottassium: 60 },
    { Nitrogen: 72, Phosphorus: 48, Pottassium: 48 },
    { Nitrogen: 63, Phosphorus: 37, Pottassium: 37 },
    { Nitrogen: 54, Phosphorus: 25, Pottassium: 25 },
  ];

  const Crops = {
    COCONUT_WCT: {
      Nitrogen: 340,
      Phosphorus: 170,
      Pottassium: 870,
    },
    COCONUT_HYBIRD_WCT: {
      Nitrogen: 500,
      Phosphorus: 320,
      Pottassium: 1200,
    },
  };

  let cropname = cropName[0].value;
  console.log("Nitrogen class" + CarbonClass);
  console.log("Phosphorous" + PhosphorusClass);
  console.log("Pottasium" + PottassiumClass);
  let nitrogen =
    (generalRecommend[CarbonClass].Nitrogen / 100) * Crops[cropname].Nitrogen;
  let phosphorus =
    (generalRecommend[PhosphorusClass].Phosphorus / 100) *
    Crops[cropname].Phosphorus;
  let pottassium =
    (generalRecommend[PottassiumClass].Pottassium / 100) *
    Crops[cropname].Pottassium;

  return (
    <>
      <div>
        {cropName.map((crop) => {
          let cropname = crop.value;

          let nitrogen =
            (generalRecommend[CarbonClass].Nitrogen / 100) *
            Crops[cropname].Nitrogen;
          let phosphorus =
            (generalRecommend[PhosphorusClass].Phosphorus / 100) *
            Crops[cropname].Phosphorus;
          let pottassium =
            (generalRecommend[PottassiumClass].Pottassium / 100) *
            Crops[cropname].Pottassium;
          console.log("Nitrogen class" + CarbonClass);
          console.log("Phosphorous" + PhosphorusClass);
          console.log("Pottasium" + PottassiumClass);
          console.log("Pottasium" + pottassium);
          return (
            <div>
              <p>{cropname}</p>
              <p>Nitrogen:{nitrogen}</p>
              <p>Phosphorus:{phosphorus}</p>
              <p>Pottassium:{pottassium}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NutrientCalculator;
