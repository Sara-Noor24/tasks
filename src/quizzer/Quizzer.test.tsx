import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        const linkElement = screen.getByText(/Quizzer/i);
        expect(linkElement).toBeInTheDocument();
    });
});
