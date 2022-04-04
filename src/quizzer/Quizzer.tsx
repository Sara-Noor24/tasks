import quizzes from "../quizData/quizData.json";
import React, { useState } from "react";
import { QuizList } from "./QuizList";
import { Quiz } from "../interfaces/quiz";

const QUIZZES = quizzes.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

export function Quizzer(): JSX.Element {
    const [quizzes] = useState<Quiz[]>(QUIZZES);

    return (
        <div>
            <h3>Quizzer</h3>
            <hr></hr>
            <QuizList quizzes={quizzes}></QuizList>
        </div>
    );
}
