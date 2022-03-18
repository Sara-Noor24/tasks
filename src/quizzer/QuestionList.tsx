import React from "react";
import { Question } from "../interfaces/question";
import { Stack } from "react-bootstrap";
import { QuestionView } from "./QuestionView";

export function QuesitonsList({
    questions
}: {
    questions: Question[];
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: Question) => (
                <div key={question.name} className="bg-light border m-2 p-2">
                    <QuestionView question={question}></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
