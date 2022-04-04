import React from "react";
import { render, screen } from "@testing-library/react";
import quizData from "../quizData/quizData.json";
import quizzes from "../quizData/quizData.json";
import { Quiz } from "../interfaces/quiz";
import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
import userEvent from "@testing-library/user-event";

export const QUIZZES = quizzes.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

describe("Testing Correct Answers MC", () => {
    test("Quiz 1 Question 1", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer={quizData[0].questions[0].expected}
                options={quizData[0].questions[0].options}
            />
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "4");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Quiz 1 Question 2", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer={quizData[0].questions[1].expected}
                options={quizData[0].questions[1].options}
            />
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "12");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Quiz 1 Question 3", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer={quizData[0].questions[2].expected}
                options={quizData[0].questions[2].options}
            />
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "10");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Quiz 2 Question 1", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer={quizData[1].questions[0].expected}
                options={quizData[1].questions[0].options}
            />
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "6");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
});
