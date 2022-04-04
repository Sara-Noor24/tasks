import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import quizData from "../quizData/quizData.json";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        expect(screen.getByText(quizData[0].title)).toBeInTheDocument();
        expect(screen.getByText(quizData[1].title)).toBeInTheDocument();

        expect(screen.getByText(quizData[0].description)).toBeInTheDocument();
        expect(screen.getByText(quizData[1].description)).toBeInTheDocument();

        expect(
            screen.queryAllByText("Number of questions in quiz: 3")
        ).toHaveLength(1);
        expect(
            screen.queryAllByText("Number of questions in quiz: 4")
        ).toHaveLength(1);
    });
});
