import { useEffect, useState } from "react";
import Select from "react-select";
import { useStore } from "../store/cropStore.js";
let cropid = 0;
const crops = [
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
function CropSelect({ CropCall }) {
  const [selectedCrop, setcrop] = useState([0]);
  const setDataFromChild = useStore((state) => state.setDataFromChild);
  const handleChange = (Crop) => {
    setcrop(Crop);
    setDataFromChild(Crop);
  };
  useEffect(() => {
    console.log(selectedCrop);
    CropCall(selectedCrop); 
  }, [selectedCrop]);
  return (
    <>
      <p className="font-semi">Select Crops</p>
      <Select
        className="w-100"
        options={crops}
        value={selectedCrop}
        onChange={handleChange}
        isMulti={true}
      ></Select>
      {/* <select
        multiple={true}
        value={selectedCrop}
        onChange={(e) => {
          const option = [...e.target.selectedOptions]; // spread the event objects into the array.
          const values = option.map((option) => option.value); //Take value from the option and assgin it to values.
          console.log(values);
          setcrop(values);
          CropCall(values);
        }}
      >
        {crops.map((crop) => (
          <option key={crop}>{crop}</option>
        ))}
      </select> */}
      {/* <ul>
        {selectedCrop.map((crop) => (
          <li key={crop}>{crop}</li>
        ))}
      </ul> */}
    </>
  );
}

export default CropSelect;
