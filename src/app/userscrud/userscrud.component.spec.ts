import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscrudComponent } from './userscrud.component';

describe('UserscrudComponent', () => {
  let component: UserscrudComponent;
  let fixture: ComponentFixture<UserscrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserscrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
