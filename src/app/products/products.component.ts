import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductmanagerService } from '../services/productmanager.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productmanagerService:ProductmanagerService) { }

  ngOnInit(): void {
  }

products:Product[]=this.productmanagerService.products;
sendDelete(i:number){
  this.productmanagerService.DeleteProduct(i);
 }
}
