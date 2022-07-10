import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/Order';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductmanagerService } from '../services/productmanager.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

product?: Product;
order:Order={} as Order;
amount:number=0;
@ViewChild('myTestDiv') myTestDiv: ElementRef;
  constructor(private route: ActivatedRoute,private productmanagerService:ProductmanagerService,private cartService:CartService,private renderer: Renderer2) {}
     
  ngOnInit(): void {
      // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('id'));

  // Find the product that correspond with the id provided in route.
  this.product = this.productmanagerService.getProductById(productIdFromRoute);
  }
  displayAomut(){
    this.renderer.setStyle(this.myTestDiv.nativeElement, 'display', 'block');
    
  }
  sendProductToCart(product:Product){
    this.order.product=product;
this.order.amount=this.amount;
this.cartService.addTocart(this.order)
console.log(product,this.amount)
this.cartService.updateCounter();
console.log(this.cartService.counter)
alert("Product Added Successfully....")
  }

}
