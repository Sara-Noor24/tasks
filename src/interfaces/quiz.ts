import { Question } from "./question";

export interface Quiz {
    id: number;
    title: string;
    description: string;
    totalPoints: number;
    numOfQuestions: number;
    questions: Question[];
}
