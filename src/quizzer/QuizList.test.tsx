import React from "react";
import { render, screen } from "@testing-library/react";
import { QuizList } from "./QuizList";
import userEvent from "@testing-library/user-event";
import quizData from "../quizData/quizData.json";
import { QUIZZES } from "./Quizzer";

describe("QuizList Tests", () => {
    beforeEach(() => {
        render(<QuizList quizzes={quizData} />);
    });

    /*test("Testing for Name of each Quiz", () => {
        const nameElement = screen.getByText(quizzes.title);
        expect(nameElement).toBeInTheDocument;
    });*/
});
