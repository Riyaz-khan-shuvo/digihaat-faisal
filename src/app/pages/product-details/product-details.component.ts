import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsList from 'src/app/cong/data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products = productsList;
  product: any;
  productIdFromRoute: any;
  productId: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productIdFromRoute = params['id'];

      // console.log(this.productIdFromRoute);

      this.product = this.products.find(
        (prod) => prod._id == this.productIdFromRoute
      );
    });
  }

}
