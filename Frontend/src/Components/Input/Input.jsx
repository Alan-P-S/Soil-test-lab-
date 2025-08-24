import { useState, useEffect } from "react";

import styles from "./Input.module.css";

function Input({ name, sendValue }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    sendValue(value);
  });
  return (
    <>
      <div className={styles.container}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">{name}</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </fieldset>
      </div>
    </>
  );
}

export default Input;
