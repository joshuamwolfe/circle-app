import React from "react";
import ColorButton from "./ColorButton";
import "./ColorButtons.css";

const ColorButtons = ({ options, addCircle }) => {
  return (
    <div className="ColorButtuns">
      {options.map((color) => (
        <ColorButton color={color} addCircle={addCircle} />
      ))}
    </div>
  );
};

export default ColorButtons;
