import { Component } from '@angular/core';
import { Album } from 'src/app/interfaces/Album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'ms-admin-add-album-screen',
  templateUrl: './admin-add-album-screen.component.html',
  styleUrls: ['./admin-add-album-screen.component.scss'],
})
export class AdminAddAlbumScreenComponent {
  addAlbumData = {
    name: '',
    price: 0,
  };

  constructor(private _albums: AlbumsService) {}

  addNewAlbum() {
    this._albums.addNewAlbum(this.addAlbumData).subscribe((response) => {
      console.log(response);
    });
  }
}
