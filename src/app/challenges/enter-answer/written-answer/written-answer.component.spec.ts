import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenAnswerComponent } from './written-answer.component';

describe('WrittenAnswerComponent', () => {
  let component: WrittenAnswerComponent;
  let fixture: ComponentFixture<WrittenAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WrittenAnswerComponent]
    });
    fixture = TestBed.createComponent(WrittenAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
