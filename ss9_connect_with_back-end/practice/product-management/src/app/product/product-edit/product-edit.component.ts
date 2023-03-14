import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  rfProduct: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
id: number;
categorys: Category[];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categorys = categories;
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(paramMap.get('id'), 10);
      this.getProduct(this.id);
    });
  }

  getProduct(id: number) {
    this.productService.findProductById(id).subscribe(productes => {
      this.rfProduct = new FormGroup({
        name: new FormControl(productes.name),
        price: new FormControl(productes.price),
        description: new FormControl(productes.description),
        category: new FormControl(productes.category)
      });
    });
  }

  onSubmit(id: number) {
    const product = this.rfProduct.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      this.router.navigateByUrl('/product/list');
      alert('Cập nhật thành công.');
    });
  }
}
