import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesDragComponent } from './cases-drag.component';

describe('CasesDragComponent', () => {
  let component: CasesDragComponent;
  let fixture: ComponentFixture<CasesDragComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesDragComponent]
    });
    fixture = TestBed.createComponent(CasesDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
