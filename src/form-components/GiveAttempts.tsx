import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqattempts, setReqattempts] = useState<string>("");

    function useanAttempt() {
        const newattempts = attempts - 1;
        setAttempts(newattempts);
    }
    function addAttempts() {
        let newattempts: number;
        if (isNaN(parseInt(reqattempts))) {
            newattempts = attempts;
        } else {
            newattempts = attempts + parseInt(reqattempts);
        }
        setAttempts(newattempts);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of Attempts: {attempts}</div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqattempts}
                    onChange={(event: ChangeEvent) =>
                        setReqattempts(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button onClick={addAttempts}>gain attempts</Button>
                <Button onClick={useanAttempt} disabled={attempts === 0}>
                    use attempt
                </Button>
            </div>
        </div>
    );
}
