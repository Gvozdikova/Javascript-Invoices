import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';


@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  customer_id: string;
  product: string;
  quantity: number;
  discount: any;
  total: number;
  constructor(private http:Http) { }

  ngOnInit() {

  }



  countTotal(){
    let amount: any = this.quantity;
    let disc: any = (this.discount / 100) || 1 ;
    let price = 200;

    this.total = price * amount * disc;
  }
  createInvoice(){
      const invoice = {
      'customer_id': 22,
      'discount': this.discount,
      'total': this.total
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:8000/api/invoices', invoice, {headers: headers})
    .map(res => res.json())
  }
}
