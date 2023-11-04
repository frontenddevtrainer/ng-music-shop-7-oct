import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderComponent } from './main-header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MainHeaderComponent],
    });
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show h1 with message as Music Store', () => {
    const heading = fixture.nativeElement.querySelector(
      '[data-testid=mainheader-heading]'
    ) as HTMLHeadingElement;
    expect(heading.textContent).toContain('Music Store');
  });

  it('should open and close profile menu', () => {
    expect(component.isMenuShown).toBeFalse();

    const button = (fixture.nativeElement as HTMLElement).querySelector(
      '[data-testid=profile-menu]'
    ) as HTMLButtonElement;
    button.click();

    expect(component.isMenuShown).toBeTrue();

    fixture.detectChanges();

    const drop = (fixture.nativeElement as HTMLElement).querySelector(
      '[data-testid=profile-menu-drop]'
    ) as HTMLDivElement;

    const links = drop.querySelectorAll('a');

    expect(links.length).toBe(3);

    expect(links.item(0).textContent).toContain("Your Profile");

  });
});
