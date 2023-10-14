import { Injectable } from '@angular/core';
import { Album } from '../interfaces/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }

  topAlbums: Album[] = []

}
