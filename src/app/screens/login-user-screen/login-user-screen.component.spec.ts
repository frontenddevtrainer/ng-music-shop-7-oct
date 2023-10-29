import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserScreenComponent } from './login-user-screen.component';

describe('LoginUserScreenComponent', () => {
  let component: LoginUserScreenComponent;
  let fixture: ComponentFixture<LoginUserScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginUserScreenComponent]
    });
    fixture = TestBed.createComponent(LoginUserScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
