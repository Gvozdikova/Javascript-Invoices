import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateInvoiceComponent } from './components/invoices/create-invoice/create-invoice.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';

const appRoutes: Routes = [
  {path:'', component: InvoicesComponent},
  {path:'invoices', component: InvoicesComponent},
  {path:'products', component: ProductsComponent},
  {path:'customers', component: CustomersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvoicesComponent,
    CustomersComponent,
    ProductsComponent,
    CreateInvoiceComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
