import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(paramMap.get('id'), 10);
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
  }
  getCategory(id: number) {
    return this.categoryService.findById(id).subscribe((category => {
      this.categoryForm = new FormGroup({
        name: new FormControl(category.name)
      });
    }));
  }
  updateCategory(id: number) {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(id, category).subscribe(() => {
      this.router.navigateByUrl('/category/list');
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

}
