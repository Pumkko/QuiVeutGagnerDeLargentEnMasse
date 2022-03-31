import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionStoreService } from '../../services/question.store.service';

@Injectable({
  providedIn: 'root'
})
export class GameCompletedGuard implements CanActivate {


  constructor(private readonly router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const gameCompleted = sessionStorage.getItem('game-completed');
    const canActivate = gameCompleted?.toLowerCase() === 'true';
    if (canActivate) {
      return true;
    } else {
      return this.router.navigateByUrl('');
    }
  }

}
