import { Component, Input } from '@angular/core';
import { Album } from 'src/app/interfaces/Album';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'ms-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {



  constructor(private _cart: CartService) {

  }

  @Input() album!: Album



  addToCart(item: Album) {
    this._cart.addToCart(item);
  }

}
