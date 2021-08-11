import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { ProductsUserComponent } from './components/products-user/products-user.component';
import { AccountComponent } from './components/account/account.component';
import { PostProdutoComponent } from './components/post-produto/post-produto.component';
import { PutProdutoComponent } from './components/put-produto/put-produto.component';
import { ConfirmSalesComponent } from './components/confirm-sales/confirm-sales.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'store', component: StoreComponent},
  // {path: 'about', component: SobreComponent},
  {path: 'contact', component: ContactComponent},

  {path: 'account', component: AccountComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'new-product', component: PostProdutoComponent},
  {path: 'myProducts', component: ProductsUserComponent},
  {path: 'cart', component: CartComponent},
  {path: 'confirm', component: ConfirmSalesComponent},
  {path: 'edit-product', component: PutProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
