import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCompletedComponent } from './game/game-completed/game-completed.component';
import { QuestionsComponent } from './game/questions/questions.component';
import { GameCompletedGuard } from './game/route-guard/game-completed.guard';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  {
    path: 'game-completed',
    component: GameCompletedComponent,
    canActivate: [GameCompletedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
