import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add.component.html'
})
export class AddProductComponent  implements OnInit{

      productForm: FormGroup

      constructor(
        private formBuilder: FormBuilder,
        private productService: ProductService,
        private router: Router
      ){}

      ngOnInit() {
        this.productForm = this.formBuilder.group({
          id: '',
          name: '',
          price: 0,
          quantity: 0
        });
      }

      save() {
        this.productService.create(this.productForm.value).subscribe(
          res => {
            this.router.navigate(['']);
          },
          error => {
            console.log(error);
          }
        );
      }

}
