import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsUserComponent } from './components/products-user/products-user.component';
import { AccountComponent } from './components/account/account.component';
import { PostProdutoComponent } from './components/post-produto/post-produto.component';
import { PutProdutoComponent } from './components/put-produto/put-produto.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfirmSalesComponent } from './components/confirm-sales/confirm-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    StoreComponent,
    CartComponent,
    ProductsUserComponent,
    AccountComponent,
    PostProdutoComponent,
    PutProdutoComponent,
    RegisterComponent,
    ConfirmSalesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
