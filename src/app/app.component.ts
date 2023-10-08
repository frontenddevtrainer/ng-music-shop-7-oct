import { Component } from '@angular/core';
import { Album } from './interfaces/Album';

@Component({
  selector: 'ms-root', // app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  topAlbumHeading: string = "Top Albums";
  latestAlbumHeading: string = "Latest Albums";
  bollywoodAlbumHeading: string = "Bollywood Albums";

  topAlbums: Album[] = [
    {
      name: "Music 101",
      albumArt: {
        thumbnail: "https://via.placeholder.com/150"
      },
      price: 100,
      singers: ["Singer A", "Singer B"],
      songs: [{
        duration: 430,
        name: "Awesome Song",
        singer: ["Singer A"]
      }],
      isPurchasedByUser: true,
    },
    {
      name: "Music 202",
      albumArt: {
        thumbnail: "https://via.placeholder.com/150"
      },
      price: 200,
      singers: ["Singer C", "Singer D"],
      songs: [{
        duration: 600,
        name: "Great Song",
        singer: ["Singer C"]
      }],
      newRelesedDate: '2023-10-08T16:13:46.338Z'
    },
    {
      name: "Music 303",
      albumArt: {
        thumbnail: "https://via.placeholder.com/150"
      },
      price: 200000,
      singers: ["Singer D", "Singer E"],
      songs: [{
        duration: 549,
        name: "Great Song",
        singer: ["Singer C"]
      }],
    }
  ]

}
