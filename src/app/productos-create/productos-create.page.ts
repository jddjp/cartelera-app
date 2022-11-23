import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/productos';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-create',
  templateUrl: './productos-create.page.html',
  styleUrls: ['./productos-create.page.scss'],
})
export class ProductosCreatePage implements OnInit {

  data: Productos

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Productos();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['productos-list']);
    });

  }

}