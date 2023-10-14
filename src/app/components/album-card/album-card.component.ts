import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Album } from 'src/app/interfaces/Album';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'ms-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
  animations: [
    trigger('growShrink', [
      state('grow', style({
        transform: 'scale(1.2)',
        backgroundColor: 'red'
      })),
      state('shrink', style({
        transform: 'scale(1)'
      })),
      transition('grow <=> shrink', animate('300ms')),
      // transition('shrink => grow', animate('1000ms'))
    ])
  ]
})
export class AlbumCardComponent {

  isHovering = false;


  constructor(private _cart: CartService) {

  }

  @Input() album!: Album



  addToCart(item: Album) {
    this._cart.addToCart(item);
  }

  onPlayHover() {
    this.isHovering = true;
  }

  onPlayOut() {
    this.isHovering = false;
  }

}
