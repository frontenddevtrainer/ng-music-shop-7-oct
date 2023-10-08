import { Injectable } from '@angular/core';
import { Album } from '../interfaces/Album';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems: Album[] = [];

  addToCart(item: Album) {
    console.log(item);
    this.cartItems.push(item)
  }

}
