import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './edit.component.html'
})
export class EditProductComponent  implements OnInit{

      productForm: FormGroup

      constructor(
        private formBuilder: FormBuilder,
        private productService: ProductService,
        private router: Router,
        private activatedRoute: ActivatedRoute
      ){}

      ngOnInit() {
        var id = this.activatedRoute.snapshot.params.id;
        this.productService.find(id).subscribe(
          res => {
            this.productForm = this.formBuilder.group({
              id: res.id,
              name: res.name,
              price: res.price,
              quantity: res.quantity
            });
          },
          error => {
            console.log(error);
          }
        );        
      }

      save() {
        this.productService.update(this.productForm.value).subscribe(
          res => {
            this.router.navigate(['']);
          },
          error => {
            console.log(error);
          }
        );
      }
}
