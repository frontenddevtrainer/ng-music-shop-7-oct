import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserScreenComponent } from './register-user-screen.component';

describe('RegisterUserScreenComponent', () => {
  let component: RegisterUserScreenComponent;
  let fixture: ComponentFixture<RegisterUserScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUserScreenComponent]
    });
    fixture = TestBed.createComponent(RegisterUserScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
