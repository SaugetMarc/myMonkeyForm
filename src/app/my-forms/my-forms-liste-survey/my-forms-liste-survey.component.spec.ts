import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsListeSurveyComponent } from './my-forms-liste-survey.component';

describe('FormsListeSurveyComponent', () => {
  let component: FormsListeSurveyComponent;
  let fixture: ComponentFixture<FormsListeSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsListeSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsListeSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
