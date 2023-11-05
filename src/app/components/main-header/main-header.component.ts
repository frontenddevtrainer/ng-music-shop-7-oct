import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/interfaces/Album';
import { IUserRegisterResponsePayload } from 'src/app/interfaces/User';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ms-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  user$!: Observable<IUserRegisterResponsePayload['user']>;

  cartItems: Album[] = [];

  constructor(private _cart: CartService, private _user: UserService) {
    this.cartItems = _cart.cartItems;
  }

  ngOnInit(): void {
    this.user$ = this._user.user$
  }

  addAlbumLink = '/admin/add-album';
}
