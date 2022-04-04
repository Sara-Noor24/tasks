import React from "react";
import { render, screen } from "@testing-library/react";
import quizData from "../quizData/quizData.json";
import quizzes from "../quizData/quizData.json";
import { Quiz } from "../interfaces/quiz";
import { QuizView } from "./QuizView";

export const QUIZZES = quizzes.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

describe("Testing Questions", () => {
    test("Quiz 1 Test", () => {
        render(<QuizView quiz={QUIZZES[0]} />);
        const showQuiz = screen.getByRole("button", { name: /Take Quiz/i });
        showQuiz.click();
        expect(
            screen.getByText(quizData[0].questions[0].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[0].questions[1].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[0].questions[2].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[0].questions[0].body)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[0].questions[1].body)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[0].questions[2].body)
        ).toBeInTheDocument();
        expect(screen.queryAllByText("Number of Points: 1")).toHaveLength(3);
    });
    test("Quiz 2 Test", () => {
        render(<QuizView quiz={QUIZZES[1]} />);
        const showQuiz = screen.getByRole("button", { name: /Take Quiz/i });
        showQuiz.click();
        expect(
            screen.getByText(quizData[1].questions[0].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[1].questions[1].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[1].questions[2].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[1].questions[3].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[1].questions[0].body)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[1].questions[1].body)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[1].questions[2].body)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizData[1].questions[3].body)
        ).toBeInTheDocument();
        expect(screen.queryAllByText("Number of Points: 1")).toHaveLength(4);
    });
});
