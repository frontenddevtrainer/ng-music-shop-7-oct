import { Component, Input } from '@angular/core';
import { Album } from 'src/app/interfaces/Album';

@Component({
  selector: 'ms-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.scss']
})
export class AlbumListingComponent {

  @Input() heading: string = "";
  @Input() albums: Album[] = [];

}
