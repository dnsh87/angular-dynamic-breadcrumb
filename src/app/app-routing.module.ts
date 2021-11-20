import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NewProductTypeComponent } from "./new-product-type/new-product-type.component";
import { ProductTypeComponent } from "./product-type/product-type.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: null
    },
    children: []
  },
  {
    path: 'product',
    component: ProductComponent,
    data: {
      breadcrumb: 'Product'
    },
    children: [
      {
        path: 'types/:param2',
        data: {
          breadcrumb: 'Product Types'
        },
        component: ProductTypeComponent,
        children: [
          {
            path: 'new',
            data: {
              breadcrumb: 'New'
            },
            component: NewProductTypeComponent,
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {}