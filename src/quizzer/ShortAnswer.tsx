import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswer(questionOptions: {
    options: string[];
    expected: string;
    points: number;
}): JSX.Element {
    const Defult_Answer = questionOptions.options[0];
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    function clearAnswer() {
        setAnswer(Defult_Answer);
    }
    return (
        <div>
            <Stack gap={3}>
                <div>
                    <Form.Group controlId="shortQuestionAnswer">
                        <Form.Label>Answer:</Form.Label>
                        <Form.Control value={answer} onChange={updateAnswer} />
                    </Form.Group>
                </div>
                <div>
                    {answer === questionOptions.expected ? (
                        <span>✔️</span>
                    ) : (
                        <span>❌</span>
                    )}
                </div>
            </Stack>
            <div>
                <Button onClick={clearAnswer}>ClearAnswer</Button>
            </div>
        </div>
    );
}
