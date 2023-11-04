import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, MainBannerComponent, MainHeaderComponent],
    })
  );

  it('should create the app', () => {});
});
