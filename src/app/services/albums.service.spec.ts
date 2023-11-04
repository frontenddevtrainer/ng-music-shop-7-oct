import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlbumsService } from './albums.service';

describe('AlbumsService', () => {
  let service: AlbumsService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlbumsService);
    httpMock = TestBed.inject(HttpTestingController)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
