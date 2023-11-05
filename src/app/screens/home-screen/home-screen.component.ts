import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsService } from 'src/app/services/albums.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ms-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent {

  user$!: Observable<any>;

  constructor(private _albums: AlbumsService, private _user: UserService) {}

  ngOnInit(): void {
    this._albums.getTopAlbums();
    this._albums.getBollywoodAlbums();
    this._albums.getLatestAlbums();
    this.user$ = this._user.user$;
  }

  topAlbumHeading: string = 'Top Albums';
  latestAlbumHeading: string = 'Latest Albums';
  bollywoodAlbumHeading: string = 'Bollywood Albums';

  topAlbums$ = this._albums.topAlbums$;
  latestAlbums$ = this._albums.latestAlbums$;
  bollywoodAlbums$ = this._albums.bollywoodAlbums$;
}
