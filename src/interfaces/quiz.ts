import { Question } from "./question";

export interface Quiz {
    title: string;
    description: string;
    totalPoints: number;
    numOfQuestions: number;
    questions: Question[];
}
