import { Component, OnInit} from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  name: string;
  price: number;
  ex_name: string;
  ex_price: number;
  id:number;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/api/products').map(response => response.json())
    .subscribe(products => this.products =products);
  }

  createProduct(){
    const item = {
      'name': this.name,
      'price': this.price
    }
    console.log(item);
    // var json = JSON.stringify(item);
    // var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    this.http.post('http://localhost:8000/api/products', item, headers).subscribe(() =>{})
    document.getElementById('#close').setAttribute('data-dismiss','modal');
  }

  editProduct(){
      //find out how to fetch current customer_id ib order to fill inputs with an appropriate information
  }

  deleteItem(index, id){
    console.log(index);
    this.products.splice(index,1);
  }



}
