import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [ { path: '', component: ProductsComponent },
{ path: 'products/:id', component: ProductComponent },
{path: 'addProduct', component: AddProductComponent },
{path: 'orderList', component: CartListComponent },
{ path: 'shipping', component: ShippingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
