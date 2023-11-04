import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenComponent } from './home-screen.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainBannerComponent } from 'src/app/components/main-banner/main-banner.component';
import { AlbumListingComponent } from 'src/app/components/album-listing/album-listing.component';

describe('HomeScreenComponent', () => {
  let component: HomeScreenComponent;
  let fixture: ComponentFixture<HomeScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeScreenComponent, MainBannerComponent, AlbumListingComponent]
    });
    fixture = TestBed.createComponent(HomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
