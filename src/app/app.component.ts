import { Component } from '@angular/core';
import { AlbumsService } from './services/albums.service';

@Component({
  selector: 'ms-root', // app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _albums: AlbumsService) {

  }

  topAlbumHeading: string = "Top Albums";
  latestAlbumHeading: string = "Latest Albums";
  bollywoodAlbumHeading: string = "Bollywood Albums";

  albums = this._albums.topAlbums



}
