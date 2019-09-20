import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productID: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.productID = this.route.snapshot.params.id;
  }

}
