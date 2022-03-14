import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateName(event: ChangeEvent) {
        setUserName(event.target.value);
        return setEditMode(true);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-editing"
                    label=""
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
            </div>
            <div>
                {editMode ? (
                    <div>
                        <Form.Group controlId="formPersonName">
                            <Form.Label>
                                Name:
                                <Form.Control
                                    value={userName}
                                    onChange={updateName}
                                />
                            </Form.Label>
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                    </div>
                ) : (
                    <div>
                        <div>
                            <span>
                                {userName} is
                                {isStudent ? " a student" : " not a student"}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
