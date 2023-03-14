import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const category = this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
  }

  getCategory(id: number) {
    this.categoryForm = new FormGroup({
      name: new FormControl('')
    });
    return this.categoryService.findById(id).subscribe((category => {
      this.categoryForm.patchValue({
        name: category.name
      });
    }));
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.router.navigateByUrl('/category/list');
      alert('Xóa thành công.');
    }, error => {
      console.log(error);
    });
  }

}
