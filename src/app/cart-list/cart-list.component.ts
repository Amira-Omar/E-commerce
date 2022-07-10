import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Order } from '../models/Order';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { AbstractControl, FormArray, FormBuilder, FormControl , FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(private cartService:CartService, private formBuilder: FormBuilder,private renderer:Renderer2) { }
  cartItems:Order[]
  @ViewChild('showForm') showForm: ElementRef;
  ngOnInit(): void {
    this.cartItems=this.cartService.orders
    console.log(this.cartItems)
  }
  checkoutForm = new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormGroup({
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      zip: new FormControl('',Validators.required)
    }),
    payments:new FormArray([new FormControl('')])
  });
  get payments() {
    return this.checkoutForm.get('payments') as FormArray;
  }
  addPayments() {
    this.payments.push( new FormControl('',Validators.required));
  }
  onSubmit(): any {
    this.cartService.clearCart();
    alert(`Your order has been submitted`);
    this.checkoutForm.reset();
    this.sendClearOrders();
  }
  sendDeleteOrder(i:number){
this.cartService.deleteById(i)
  }
  sendClearOrders(){
    this.cartService.clearCart()
    this.cartItems=[]
  }
  showFormMethod(){
    if(this.cartItems.length==0){
    
alert("Your Cart Is Empty...")
    }else{
      console.log(this.cartItems)
this.renderer.setStyle(this.showForm.nativeElement,'display',"block")
    }
  }
}
