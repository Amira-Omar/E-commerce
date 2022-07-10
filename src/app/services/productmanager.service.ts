import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductmanagerService {

  constructor() { }
 products:Product[]=[
    {
      id:1,
      name:"Apple",
      price:20,
      description:"Shop fresh fruit from our store, it's delicious fresh apples",
      img:"../assets/images/apple.jpg"
    },
    {
      id:2,
      name:"Banana",
      price:15,
      description:"Shop fresh fruit from our store, it's delicious fresh bananas",
      img:"../assets/images/banana.jpg"
    },
    {
      id:3,
      name:"Mango",
      price:30,
      description:"Shop fresh fruit from our store, it's delicious fresh mango",
      img:"../assets/images/mango.jpg"
    },
    {
      id:4,
      name:"Orange",
      price:10,
      description:"Shop fresh fruit from our store, it's delicious fresh orange",
      img:"../assets/images/orange.jpg"
    },
    {
      id:5,
      name:"Pineapple",
      price:200,
      description:"Shop fresh fruit from our store, it's delicious fresh pineapple",
      img:"../assets/images/pineapple.jpg"
    },
    {
      id:6,
      name:"Strawberry",
      price:200,
      description:"Shop fresh fruit from our store, it's delicious fresh strawberry",
      img:"../assets/images/strawberry.jpg"
    }
  ]

  getProductById(id:number){
    return this.products.find(p=>p.id==id)
  }
  DeleteProduct(i:number){
    this.products.splice(i, 1)
   
  }
  AddProduct(product:Product){
    this.products.push(product)
  }
}
