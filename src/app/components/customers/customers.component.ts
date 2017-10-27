import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  products: any;
  name: string;
  address: string;
  phone: string;
  customers: any;

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/api/customers').map(response => response.json())
    .subscribe(customers => this.customers =customers);
  }

  createCustomer(){
    const item = {
      'name': this.name,
      'address': this.address,
      'phone': this.phone
    }
    console.log(item);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    this.http.post('http://localhost:8000/api/customers', item, headers).subscribe(() =>{})
    document.getElementById('#close').setAttribute('data-dismiss','modal');
  }
}
