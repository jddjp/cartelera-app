// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'productos-list', pathMatch: 'full' },
  {
    path: 'productos-create',
    loadChildren: () => import('./productos-create/productos-create.module').then(m => m.ProductosCreatePageModule)
  },
  {
    path: 'productos-edit/:product_id',
    loadChildren: () => import('./productos-edit/productos-edit.module').then(m => m.ProductosEditPageModule)
  },
  {
    path: 'productos-list',
    loadChildren: () => import('./productos-list/productos-list.module').then(m => m.ProductosListPageModule)
  },
  {
    path: 'productos-detail',
    loadChildren: () => import('./productos-detail/productos-detail.module').then(m => m.ProductosDetailPageModule)
  },
  {
    path: 'productos-create',
    loadChildren: () => import('./productos-create/productos-create.module').then( m => m.ProductosCreatePageModule)
  },

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }