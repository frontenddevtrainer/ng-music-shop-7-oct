import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailScreenComponent } from './album-detail-screen.component';

describe('AlbumDetailScreenComponent', () => {
  let component: AlbumDetailScreenComponent;
  let fixture: ComponentFixture<AlbumDetailScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumDetailScreenComponent]
    });
    fixture = TestBed.createComponent(AlbumDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
