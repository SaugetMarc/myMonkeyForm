import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeUsagerComponent } from './admin-liste-usager.component';

describe('AdminListeUsagerComponent', () => {
  let component: AdminListeUsagerComponent;
  let fixture: ComponentFixture<AdminListeUsagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeUsagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
