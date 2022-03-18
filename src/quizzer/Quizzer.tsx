import quizzes from "../quizData/quizData.json";
import { Quiz } from "../interfaces/quiz";
import React, { useState } from "react";
import { QuizList } from "./QuizList";

export const QUIZZES = quizzes.map(
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
