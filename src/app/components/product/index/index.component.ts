import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/entities/product.entity';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  templateUrl: './index.component.html'
})
export class ProductListComponent  implements OnInit{

      products: Product[];

      constructor(
        private productService: ProductService,
        private router: Router
      ){}

      ngOnInit() {
            this.loadData();
      }

      edit(id: string){
        this.router.navigate(['/edit/' + id]);
      }

      delete(id: string){
        var result = confirm('Estás seguro, de eliminar el producto?');
        if(result){
          this.productService.delete(id).subscribe(
            res => {
              this.router.navigate(['']);
            },
            error => {
              console.log(error);
            }
          );
        }
      }

      loadData() { 
        this.productService.findAll().subscribe(
          res => {
            this.products = res;
          },
          error => {
            alert(error);
          }
        );
      }
}
