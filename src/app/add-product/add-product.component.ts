import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductmanagerService } from '../services/productmanager.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
   product={} as Product;
  constructor(private productmanagerService:ProductmanagerService,private router:Router) {

   }

  ngOnInit(): void {
  }
sendAddProduct(){
  this.product.id=this.productmanagerService.products.length+1;
  this.product.img="../assets/images/grapes.jpg"
  alert(this.product.name);
  this.productmanagerService.AddProduct(this.product);
  this.router.navigateByUrl('');

}
}
