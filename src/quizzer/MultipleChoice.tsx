import React, { useState } from "react";
import { Form, Stack } from "react-bootstrap";

export function MulipleChoice(questionOptions: {
    options: string[];
    expected: string;
    points: number;
}): JSX.Element {
    const Defult_Answer = questionOptions.options[0];
    const [givenAnswer, setGivenAnswer] = useState<string>(Defult_Answer);

    function updateGivenAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setGivenAnswer(event.target.value);
    }
    return (
        <div>
            <Stack gap={3}>
                <div>
                    <Form.Group controlId="mulitplechoicequestion">
                        <Form.Label>Choose an Answer</Form.Label>
                        <Form.Select
                            value={givenAnswer}
                            onChange={updateGivenAnswer}
                        >
                            {questionOptions.options.map((option: string) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    {givenAnswer === questionOptions.expected ? (
                        <span>✔️</span>
                    ) : (
                        <span>❌</span>
                    )}
                </div>
            </Stack>
        </div>
    );
}
