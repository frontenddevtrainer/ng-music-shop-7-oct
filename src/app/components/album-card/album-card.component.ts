import { Component, Input } from '@angular/core';
import { Album } from 'src/app/interfaces/Album';

@Component({
  selector: 'ms-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {

  @Input() album!: Album

}
