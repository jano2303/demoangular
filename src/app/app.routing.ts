import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product/index/index.component';
import { AddProductComponent } from './components/product/add/add.component';
import { EditProductComponent } from './components/product/edit/edit.component';


const routes: Routes = [

        { path: '', component: ProductListComponent },
        { path: 'index', component: ProductListComponent },
        { path: 'add', component: AddProductComponent },
        { path: 'edit/:id', component: EditProductComponent }
];

export const routing = RouterModule.forRoot(routes);