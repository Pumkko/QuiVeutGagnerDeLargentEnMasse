import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuestionStoreService } from 'src/app/services/question.store.service';

@Component({
  selector: 'app-submit-response-button',
  templateUrl: './submit-response-button.component.html',
  styleUrls: ['./submit-response-button.component.scss']
})
export class SubmitResponseButtonComponent implements OnInit {


  wrongAnswerAnimation: boolean = false;
  rightAnswerAnimation: boolean = false;

  goodAnswerFound = false;
  
  constructor(private readonly questionStoreService: QuestionStoreService) { }

  ngOnInit(): void {
    this.questionStoreService.responseStatus$.subscribe(status => this.manageResponseStatus(status));
    this.questionStoreService.nextQuestion$.subscribe(() => this.goodAnswerFound = false);
  }

  clicked(): void {
    this.questionStoreService.dispatchResponseSubmitted();
  }

  private manageResponseStatus(responseStatus: boolean): void {
    this.wrongAnswerAnimation = !responseStatus;
    this.rightAnswerAnimation = responseStatus;
    this.goodAnswerFound = responseStatus;

    setTimeout(() => {
      this.wrongAnswerAnimation = false;
      this.rightAnswerAnimation = false;
    }, 800); // 800ms parce que c'est la durée de notre animation
  }
}
