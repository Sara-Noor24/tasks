import React, { useState } from "react";
import { Form, Stack } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
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
                    {answer === expectedAnswer ? (
                        <span>✔️</span>
                    ) : (
                        <span>❌</span>
                    )}
                </div>
            </Stack>
        </div>
    );
}
