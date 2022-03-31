import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { Question } from "../model/question.model";
import { QuestionService } from "./question.service";

@Injectable()
export class QuestionStoreService {

    private responseSubmittedSubject = new Subject<undefined>();
    responseSubmitted$ = this.responseSubmittedSubject.asObservable();

    private responseStatusSubject = new Subject<boolean>();
    responseStatus$ = this.responseStatusSubject.asObservable();

    private requestQuestionSubject = new Subject<Question>();
    nextQuestion$ = this.requestQuestionSubject.asObservable();

    private currentQuestion?: Question;

    constructor(private readonly questionService: QuestionService, private readonly router: Router) { }

    dispatchResponseStatus(status: boolean): void {
        this.responseStatusSubject.next(status);
    }

    dispatchResponseSubmitted(): void {
        this.responseSubmittedSubject.next(undefined);
    }

    dispatchRequestQuestion(): void {
        const nextQuestion = this.questionService.getNextQuestion();
        if (nextQuestion) {
            this.currentQuestion = nextQuestion;
            this.requestQuestionSubject.next(nextQuestion);
        } else {
            this.responseSubmittedSubject.complete();
            this.responseStatusSubject.complete();
            this.requestQuestionSubject.complete();

            sessionStorage.setItem('game-completed', 'true');
            this.router.navigateByUrl('/game-completed');

        }
    }

    submitAnswer(answerIndex: number): void {
        if (this.currentQuestion) {
            const responseStatus = this.questionService.submitAnswer(this.currentQuestion, answerIndex);
            this.dispatchResponseStatus(responseStatus);
        }
    }

}