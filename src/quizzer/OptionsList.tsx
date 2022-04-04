import React from "react";
import { Stack } from "react-bootstrap";
import { MulipleChoice } from "./MultipleChoice";
import { ShortAnswer } from "./ShortAnswer";

export function OptionsList({
    options,
    type,
    expected,
    points
}: {
    options: string[];
    type: string;
    expected: string;
    points: number;
}): JSX.Element {
    return (
        <div>
            <Stack gap={3}>
                {type === "multiple_choice_question" && (
                    <MulipleChoice
                        options={options}
                        expected={expected}
                        points={points}
                    ></MulipleChoice>
                )}
                {type === "short_answer_question" && (
                    <ShortAnswer
                        options={options}
                        expected={expected}
                        points={points}
                    ></ShortAnswer>
                )}
            </Stack>
        </div>
    );
}
