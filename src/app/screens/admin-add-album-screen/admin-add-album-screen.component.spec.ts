import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAlbumScreenComponent } from './admin-add-album-screen.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AdminAddAlbumScreenComponent', () => {
  let component: AdminAddAlbumScreenComponent;
  let fixture: ComponentFixture<AdminAddAlbumScreenComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [AdminAddAlbumScreenComponent],
    });
    fixture = TestBed.createComponent(AdminAddAlbumScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
