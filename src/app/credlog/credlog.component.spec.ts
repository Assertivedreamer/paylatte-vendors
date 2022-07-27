import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredlogComponent } from './credlog.component';

describe('CredlogComponent', () => {
  let component: CredlogComponent;
  let fixture: ComponentFixture<CredlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
