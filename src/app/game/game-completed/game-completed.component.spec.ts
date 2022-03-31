import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCompletedComponent } from './game-completed.component';

describe('GameCompletedComponent', () => {
  let component: GameCompletedComponent;
  let fixture: ComponentFixture<GameCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
