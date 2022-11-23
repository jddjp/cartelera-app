import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosDetailPageRoutingModule } from './productos-detail-routing.module';

import { ProductosDetailPage } from './productos-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosDetailPageRoutingModule
  ],
  declarations: [ProductosDetailPage]
})
export class ProductosDetailPageModule {}
