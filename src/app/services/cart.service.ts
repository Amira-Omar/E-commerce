
import { Order } from '../models/Order';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ArrayType } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private siblingMsg = new Subject<number>();
public orders:Order[]=[]
counter:number=0;
addTocart(order:Order){
  order.id=this.orders.length+1;
this.orders.push(order)
}
getCartData(){
  return this.orders
}
clearCart(){
  this.orders=[]
  this.counter=0;
  this.siblingMsg.next(this.counter);
}
deleteById(i:number){
this.orders.splice(i,1)
this.counter--;
this.siblingMsg.next(this.counter);
}
  constructor(private http: HttpClient) {
    console.log(this.orders)
   }
   displayCounter(): Observable<number> {
    return this.siblingMsg.asObservable();
  }
   updateCounter(){
      this.counter++;
      this.siblingMsg.next(this.counter);
   }
   getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
