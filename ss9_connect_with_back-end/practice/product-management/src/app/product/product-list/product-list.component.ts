import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.productService.getAll().subscribe(productes => {
      this.products = productes;
    });
  }
}
