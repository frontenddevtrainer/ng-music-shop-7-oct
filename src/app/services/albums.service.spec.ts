import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AlbumsService } from './albums.service';
import { Album } from '../interfaces/Album';

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

describe('AlbumsService', () => {
  let service: AlbumsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlbumsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http on getTopAlbums()', () => {
    service.getTopAlbums();

    const request = httpMock.expectOne('http://localhost:3000/top-albums');

    expect(request.request.method).toBe('GET');

    request.flush([mockAlbum]);

    service.topAlbums$.subscribe((albums) => {
      expect(albums).toEqual([mockAlbum]);
    });
  });
});
