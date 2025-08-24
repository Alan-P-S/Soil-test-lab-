import { useState, useEffect, use } from "react";
import { useStore } from "./store/cropStore";
import "./App.css";

import PhValue from "./Components/PhValue/PhValue";
import CropSelect from "./Components/CropSelect";
import ListAdding from "./Components/ListAdding";
import TssValue from "./Components/TssValue/TssValue";
import OrganicCarbon from "./Components/OraganicCarbon/OrganicCarbon";
import Phosphorus from "./Components/Phosphorous/Phosphorus";
import Pottassium from "./Components/Pottasium/Pottassium";
import NutrientCalculator from "./Components/NutrientCalculator/NutrientCalculator";
import Input from "./Components/Input/Input";

function app() {
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
  const [crops, setCrop] = useState(null);
  const [showcomponent, setShowComponentState] = useState(false);
  const [username, setUserName] = useState("");
  const dataFromChild = useStore((state) => state.dataFromChild);
  const handleClick = () => {
    setShowComponentState(true);
  };

  return (
    <>
      <div className="bg-blue-500 w-full h-20 flex content-center justify-center">
        <p className="content-center text-white text-2xl">
          Welcome to Soil test lab InterFace🧪
        </p>
      </div>

      <div className="flex row p-3 gap-5">
        <div className="flex flex-col m-10 w-50">
          <Input name={"Username"} sendValue={setUserName}></Input>
          <Input name={"Phone"} sendValue={setUserName}></Input>
          <Input name={"Place"} sendValue={setUserName}></Input>
        </div>
        <p></p>
        <div className="flex flex-col m-10 w-50">
          <PhValue
            classCall={setPhClass}
            ValueCall={setPhValue}
            className="ph"
          ></PhValue>
          <TssValue ClassCall={setTssClass} ValueCall={setTssValue}></TssValue>
          <OrganicCarbon
            classCall={setOrganicCarbonClass}
            ValueCall={setOrganicCarbon}
          ></OrganicCarbon>
        </div>
        <div className="flex flex-col m-10 w-50">
          <Phosphorus
            classCall={setPhosphorousClass}
            ValueCall={setPhosphorous}
          ></Phosphorus>
          <Pottassium
            classCall={setPottasiumClass}
            ValueCall={setPottasium}
          ></Pottassium>

          <CropSelect CropCall={setCrop}></CropSelect>
          <button onClick={handleClick} className="m-2 btn btn-primary">
            Calculate
          </button>
        </div>
      </div>
      {showcomponent && (
        <NutrientCalculator
          cropName={crops}
          CarbonClass={organicCarbonClass}
          PhosphorusClass={phosphorousClass}
          PottassiumClass={pottasiumClass}
        ></NutrientCalculator>
      )}

      {/* <div>
        {dataFromChild &&
          dataFromChild.map((item) => (
            <div key={item.value}>
              <p>{item.value}</p>
            </div>
          ))}
      </div> */}
    </>
  );
}

export default app;
