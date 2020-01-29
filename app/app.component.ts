import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon';
  itemName1=""
  iN1=""
  itemName2=""
  iN2=""
  price1=""
  pr1=""
  price2=""
  pr2=""
  checkoutButton:boolean=false;
  checkout:boolean=false;
  total:number;
  totBill:number;
  tax:number;

  constructor() { }                                                                                             

  onclick(){
    this.iN1="Name 1: "+this.itemName1
    this.iN2="Name 2: "+this.itemName2
    this.pr1="Price is :"+this.price1
    this.pr2="Price of :"+this.price2
    this.total= parseInt(this.price1) +parseInt (this.price2)
    this.checkoutButton=true;
  }
  totalBill(){
    this.totBill=(this.total)+(0.18*this.total)
    this.tax=(this.total*0.18);
    this.checkout=true;

  }

  ngOnInit() {
  }

}
