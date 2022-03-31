import { TestBed } from '@angular/core/testing';

import { GameCompletedGuard } from './game-completed.guard';

describe('GameCompletedGuard', () => {
  let guard: GameCompletedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GameCompletedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
