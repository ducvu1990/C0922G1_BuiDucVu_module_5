import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-produt-edit',
  templateUrl: './produt-edit.component.html',
  styleUrls: ['./produt-edit.component.css']
})
export class ProdutEditComponent implements OnInit {
  product: Product;

  rfProduct: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = parseInt(paramMap.get('id'), 10);
      this.product = this.productService.findProductById(id);
      this.rfProduct = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description),
      });
    });
  }

  onSubmit() {
    this.productService.updateProduct(this.rfProduct.value);
    this.router.navigateByUrl('/product/list');
  }
}
