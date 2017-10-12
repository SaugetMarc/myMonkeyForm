import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsagerComponent } from './admin-usager.component';

describe('AdminUsagerComponent', () => {
  let component: AdminUsagerComponent;
  let fixture: ComponentFixture<AdminUsagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
