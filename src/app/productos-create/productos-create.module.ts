import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosCreatePageRoutingModule } from './productos-create-routing.module';

import { ProductosCreatePage } from './productos-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosCreatePageRoutingModule
  ],
  declarations: [ProductosCreatePage]
})
export class ProductosCreatePageModule {}
