import React from 'react';
import Circle from './Circle';

function ColoredCircles () {
    const circles = ['indigo', 'peachpuff', 'lavender',];
    return (
        <div>
            {circles.map((color, idx) => (
                <Circle color={color} idx={idx} />
            ))}
        </div>
    )
}

export default ColoredCircles;
