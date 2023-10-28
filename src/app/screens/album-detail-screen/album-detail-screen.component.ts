import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Album } from 'src/app/interfaces/Album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'ms-album-detail-screen',
  templateUrl: './album-detail-screen.component.html',
  styleUrls: ['./album-detail-screen.component.scss'],
})
export class AlbumDetailScreenComponent implements OnInit {

  album!: Album;

  constructor(private _route: ActivatedRoute, private _album: AlbumsService) {}

  ngOnInit(): void {
    this._route.params.pipe(
      tap((params) => {
        const id = params['id'];
        if (id) {
          this._album.getAlbum(id).subscribe((response)=>{
              this.album = response;
          })
        }
      })
    ).subscribe();
  }
}
