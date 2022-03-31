import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitResponseButtonComponent } from './submit-response-button.component';

describe('SubmitResponseButtonComponent', () => {
  let component: SubmitResponseButtonComponent;
  let fixture: ComponentFixture<SubmitResponseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitResponseButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitResponseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
