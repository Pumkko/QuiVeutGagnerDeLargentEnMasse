import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';
import { Question } from 'src/app/model/question.model';
import { QuestionStoreService } from 'src/app/services/question.store.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  private selectedReponseIndex: number = -1;
  private currentQuestion?: Question;


  timeToWaitInSecond = 5;
  rightAnswerFound = false;

  get question(): string | undefined {
    return this.currentQuestion?.question;
  }

  get reponsesPossibles(): string[] | undefined {
    return this.currentQuestion?.reponsesPossibles;
  }

  constructor(
    private readonly questionStoreService: QuestionStoreService) { }

  ngOnInit(): void {
    
    this.questionStoreService.responseSubmitted$.subscribe(() => this.soumettreReponse());
    this.questionStoreService.nextQuestion$.subscribe({
      next:(question) => {
        this.currentQuestion = question;
      },
      complete: () => {
        
      }
    });

    this.questionStoreService.responseStatus$.subscribe(status => this.manageResponseStatus(status));

    this.questionStoreService.dispatchRequestQuestion();
  }

  soumettreReponse(): void {
    if (!this.currentQuestion) {
      return;
    }

    this.questionStoreService.submitAnswer(this.selectedReponseIndex);
  }

  manageResponseStatus(responseStatus: boolean): void {
    if (responseStatus) {
      this.rightAnswerFound = true;
      interval(1000)
        .pipe(
          take(5)
        )
        .subscribe({
          next: () => this.timeToWaitInSecond--,
          complete: () => {
            this.rightAnswerFound = false;
            this.timeToWaitInSecond = 5;
            this.questionStoreService.dispatchRequestQuestion();
          }
        })
    }
  }

  onReponseSelected(index: number): void {
    this.selectedReponseIndex = index;
  }

}
