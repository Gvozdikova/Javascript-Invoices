import { Component, OnInit} from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit{
  customer_id: number;
  discount: number;
  quantity: number;
  total: number;
  invoices:any;

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/api/invoices').map(response => response.json())
    .subscribe(invoices => this.invoices = invoices);
  }
  countTotal(){
    let amount: any = this.quantity;
    let disc: any = (1-(this.discount / 100)) || 1 ;
    let price = 200;

    this.total = price * amount * disc;
  }

  createInvoice(){
    const item = {
      'customer_id': 22,
      'discount': this.discount,
      'total': this.total
    }
    console.log(item);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    this.http.post('http://localhost:8000/api/invoices', item, headers).subscribe(() =>{})
    document.getElementById('#close').setAttribute('data-dismiss','modal');
  }

}
