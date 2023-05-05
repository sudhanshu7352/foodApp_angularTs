import { Component } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cart!:Cart;
  constructor(private cartService:CartService){    
    this.setCart();
  }

  ngOnInit(): void {
    
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }


}
