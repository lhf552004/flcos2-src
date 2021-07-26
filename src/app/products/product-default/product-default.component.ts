import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emes-product-default',
  templateUrl: './product-default.component.html',
  styleUrls: ['./product-default.component.scss']
})
export class ProductDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Default product')
  }

}
