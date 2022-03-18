import React from "react";
import { Question } from "../interfaces/question";
import { OptionsList } from "./OptionsList";

export function QuestionView({
    question
}: {
    question: Question;
}): JSX.Element {
    return (
        <div>
            <div>
                <h4>{question.name}</h4>
                <i>{question.body}</i>
                <div></div>
                <i>Number of Points: {question.points}</i>
                <OptionsList
                    options={question.options}
                    type={question.type}
                    expected={question.expected}
                    points={question.points}
                ></OptionsList>
            </div>
        </div>
    );
}
