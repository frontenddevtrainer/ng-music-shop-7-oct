import { Injectable } from '@angular/core';
import { Album } from '../interfaces/Album';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private topAlbums: BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>(
    []
  );
  topAlbums$ = this.topAlbums.asObservable();

  constructor(private _http: HttpClient) {}

  getTopAlbums() {
    this._http.get<Album[]>('http://localhost:3000/top-albums').subscribe({
      next: (response) => {
        this.topAlbums.next(response);
      },
      error: ()=>{
        this.topAlbums.next([]);
        // alert("Top albums cannot be loaded.")
      }
    });
  }
}
