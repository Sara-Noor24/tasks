import React from "react";
import { render } from "@testing-library/react";
import { QuizList } from "./QuizList";
import quizData from "../quizData/quizData.json";

describe("QuizList Tests", () => {
    beforeEach(() => {
        render(<QuizList quizzes={quizData} />);
    });

    /*test("Testing for Name of each Quiz", () => {
        const nameElement = screen.getByText(quizzes.title);
        expect(nameElement).toBeInTheDocument;
    });*/
});
