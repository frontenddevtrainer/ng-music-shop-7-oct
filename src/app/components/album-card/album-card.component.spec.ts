import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCardComponent } from './album-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Album } from 'src/app/interfaces/Album';

const mockAlbum: Album = {
  albumArt: { thumbnail: '' },
  name: 'Album Name',
  singers: ['Singer 1'],
  songs: [
    {
      duration: 2000,
      name: 'Song 1',
      singer: ['Singer 1'],
    },
  ],
  price: 300,
};

describe('AlbumCardComponent', () => {
  let component: AlbumCardComponent;
  let fixture: ComponentFixture<AlbumCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule],
      declarations: [AlbumCardComponent],
    });
    fixture = TestBed.createComponent(AlbumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show add to cart button', () => {
    component.album = mockAlbum;
    fixture.detectChanges();

    const addToCartButton = (
      fixture.nativeElement as HTMLElement
    ).querySelector('[data-testid="add-to-cart"]');

    expect(addToCartButton).toBeTruthy();
    expect(addToCartButton?.textContent).toContain('Add to Cart');
  });

  it('should show Play from Library button', () => {
    component.album = { ...mockAlbum, isPurchasedByUser: true };
    fixture.detectChanges();

    const addToCartButton = (
      fixture.nativeElement as HTMLElement
    ).querySelector('[data-testid="play-album"]');

    expect(addToCartButton).toBeTruthy();
    expect(addToCartButton?.textContent).toContain('Play from Library');
  });

  it('should verify content on the card component', () => {
    component.album = mockAlbum;
    fixture.detectChanges();

    const heading = (fixture.nativeElement as HTMLElement).querySelector('h3');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain(mockAlbum.name);
  });
});
