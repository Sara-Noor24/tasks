import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuesitonsList } from "./QuestionList";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <h3>{quiz.title}</h3>
            <i>{quiz.description}</i>
            <div>
                <i>Number of questions in quiz: {quiz.numOfQuestions}</i>
            </div>
            <Button onClick={() => setVisible(!visible)}>Take Quiz</Button>
            {visible && (
                <div>
                    <QuesitonsList questions={quiz.questions}></QuesitonsList>
                    <i>Total Points: {quiz.totalPoints}</i>
                </div>
            )}
        </div>
    );
}
