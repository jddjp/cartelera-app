import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosDetailPage } from './productos-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosDetailPageRoutingModule {}
