import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "cyan",
    "magenta",
    "purple",
    "orange",
    "green",
    "yellow",
    "maroon"
];
export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosen] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setChosen(e.target.value)
                        }
                        id={"color-choice-" + color}
                        label={
                            <span
                                style={{
                                    backgroundColor: color
                                }}
                            >
                                {color}
                            </span>
                        }
                        value={color}
                        checked={chosenColor === color}
                    />
                ))}
                <p>
                    The current color is:
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: chosenColor }}
                    >
                        {chosenColor}
                    </span>
                </p>
            </div>
        </div>
    );
}
