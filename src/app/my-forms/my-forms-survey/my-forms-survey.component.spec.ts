import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSurveyComponent } from './my-forms-survey.component';

describe('FormsSurveyComponent', () => {
  let component: FormsSurveyComponent;
  let fixture: ComponentFixture<FormsSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
