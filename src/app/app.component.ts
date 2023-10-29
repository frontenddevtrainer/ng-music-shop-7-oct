import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './services/albums.service';
import { Album } from './interfaces/Album';
import { UserService } from './services/user.service';

@Component({
  selector: 'ms-root', // app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _user: UserService) {}

  ngOnInit(): void {
    this._user.getProfile()
  }
}
