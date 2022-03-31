import { Injectable } from "@angular/core";
import { Question } from "../model/question.model";
import { QuestionProviderService } from "./question.provider.service";

@Injectable({
    providedIn: 'any'
})
export class QuestionService {
    
    
    private currentIndex = -1;
    
    private questions: Question[] = [];
    
    constructor(private readonly questionProviderService: QuestionProviderService) {
    }

    loadQuestions() {
        this.questions = this.questionProviderService.getQuestions();
    }


    getNextQuestion(): Question | undefined {
        this.currentIndex++;

        if (this.currentIndex >= this.questions.length) {
            return;
        }

        return this.questions[this.currentIndex];
    }

    submitAnswer(question: Question, indexReponse: number): boolean {
        return question.bonneReponseIndex === indexReponse;
    }
}