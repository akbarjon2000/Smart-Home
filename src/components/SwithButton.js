import React from "react";
import { InputGroup, input } from "react-bootstrap";

const SwithButton = () => {
  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked
      ></input>
      <label class="form-check-label" for="flexSwitchCheckChecked">
        Checked switch checkbox input
      </label>
    </div>
  );
};

export default SwithButton;
