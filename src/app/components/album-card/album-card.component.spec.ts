import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCardComponent } from './album-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AlbumCardComponent', () => {
  let component: AlbumCardComponent;
  let fixture: ComponentFixture<AlbumCardComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, NoopAnimationsModule],
      declarations: [AlbumCardComponent],
    });
    fixture = TestBed.createComponent(AlbumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
