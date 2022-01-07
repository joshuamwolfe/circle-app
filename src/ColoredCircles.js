import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

function getRandom(min = 0, max = 100) {
  return Math.Random() * (max - min) + min;
}

function ColoredCircles() {
  const [circles, setCircles] = useState([]);
  const addCircle = (color) => {
    setCircles((circles) => [
      ...circles,
      { color, x: getRandom(), y: getRandom() },
    ]);
  };
  return (
    <div>
      <ColorButtons
        addCircle={addCircle}
        options={["peachpuff", "lightsteelblue", "paleturquoise"]}
      />

      {circles.map((color, idx, x, y) => (
        <Circle color={color} idx={idx} key={idx} x={x} y={y} />
      ))}
    </div>
  );
}

export default ColoredCircles;
