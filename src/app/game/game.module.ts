import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { GameCompletedComponent } from './game-completed/game-completed.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionStoreService } from '../services/question.store.service';



@NgModule({
  declarations: [GameCompletedComponent, QuestionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    UiModule
  ],
  exports: [
    QuestionsComponent
  ],
  providers: [
    QuestionStoreService
  ]
})
export class GameModule { }
