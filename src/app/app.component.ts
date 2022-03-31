import { Component, OnInit } from '@angular/core';
import { interval, take, timer } from 'rxjs';
import { Question } from './model/question.model';
import { QuestionService } from './services/question.service';
import { QuestionStoreService } from './services/question.store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
}
