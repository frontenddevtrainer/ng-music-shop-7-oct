import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Album } from 'src/app/interfaces/Album';

@Component({
  selector: 'ms-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.scss'],
  animations: [
    trigger("listAnimation", [
      transition("* <=> *", [
        query(":enter", [
          style({ opacity: 0, transform: "translateX(-40px)" }),
          stagger('200ms', [
            animate('300ms', style({ opacity: 1, transform: "none" })),
            // animate('50ms', style({ opacity: 0 })),
            // animate('50ms', style({ opacity: 1 })),
            // animate('50ms', style({ opacity: 0 })),
            // animate('50ms', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class AlbumListingComponent {

  @Input() heading: string = "";
  @Input() albums: Album[] = [];

}
