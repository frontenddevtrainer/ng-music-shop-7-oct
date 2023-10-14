import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './services/albums.service';
import { Album } from './interfaces/Album';

@Component({
  selector: 'ms-root', // app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _albums: AlbumsService) {

  }
  
  ngOnInit(): void {
    this._albums.getTopAlbums()
  }

  topAlbumHeading: string = "Top Albums";
  latestAlbumHeading: string = "Latest Albums";
  bollywoodAlbumHeading: string = "Bollywood Albums";

  albums$ = this._albums.topAlbums$;



}
