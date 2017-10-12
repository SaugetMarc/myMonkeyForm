import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormsBuildComponent } from './my-forms-build.component';

describe('MyFormsBuildComponent', () => {
  let component: MyFormsBuildComponent;
  let fixture: ComponentFixture<MyFormsBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormsBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormsBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
