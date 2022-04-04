import React from "react";
import { render, screen } from "@testing-library/react";
import quizData from "../quizData/quizData.json";
import quizzes from "../quizData/quizData.json";
import { Quiz } from "../interfaces/quiz";
import userEvent from "@testing-library/user-event";
import { ShortAnswer } from "./ShortAnswer";

export const QUIZZES = quizzes.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

describe("Testing short answer", () => {
    test("Quiz 2 Question 2", () => {
        render(
            <ShortAnswer
                options={quizData[1].questions[1].options}
                expected={quizData[1].questions[1].expected}
                points={quizData[1].questions[1].points}
            />
        );
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        userEvent.type(inputBox, "12");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Quiz 2 Question 3", () => {
        render(
            <ShortAnswer
                options={quizData[1].questions[2].options}
                expected={quizData[1].questions[2].expected}
                points={quizData[1].questions[2].points}
            />
        );
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        userEvent.type(inputBox, "Question Mark");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Quiz 2 Question 4", () => {
        render(
            <ShortAnswer
                options={quizData[1].questions[3].options}
                expected={quizData[1].questions[3].expected}
                points={quizData[1].questions[3].points}
            />
        );
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        userEvent.type(inputBox, "No");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
});
