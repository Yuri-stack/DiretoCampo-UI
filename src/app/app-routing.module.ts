import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { ProductsUserComponent } from './components/products-user/products-user.component';
import { AccountComponent } from './components/account/account.component';
import { PostProdutoComponent } from './components/post-produto/post-produto.component';
import { PutProdutoComponent } from './components/put-produto/put-produto.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'store', component: StoreComponent},
  // {path: 'about', component: SobreComponent},
  {path: 'contact', component: ContactComponent},

  {path: 'account', component: AccountComponent},
  // {path: '/login', component: LoginComponent},
  {path: 'new-product', component: PostProdutoComponent},
  {path: 'edit-product', component: PutProdutoComponent},
  {path: 'myProducts', component: ProductsUserComponent},
  {path: 'cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
