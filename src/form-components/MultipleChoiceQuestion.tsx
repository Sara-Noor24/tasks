import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const Defult_Answer = options[0];
    const [givenAnswer, setGivenAnswer] = useState<string>(Defult_Answer);
    function updateGivenAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setGivenAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="mutiplechoicequestion">
                    <Form.Label>Choose an Answer</Form.Label>
                    <Form.Select
                        value={givenAnswer}
                        onChange={updateGivenAnswer}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {givenAnswer === expectedAnswer ? (
                    <span>✔️</span>
                ) : (
                    <span>❌</span>
                )}
            </div>
        </div>
    );
}
