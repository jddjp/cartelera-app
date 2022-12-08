import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos} from '../models/productos';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-productos-edit',
  templateUrl: './productos-edit.page.html',
  styleUrls: ['./productos-edit.page.scss'],
})
export class ProductosEditPage implements OnInit {


  product_id: number = 1;
  data: Productos;

  constructor(  
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
    ) { 
      this.data= new Productos() ;
    }

  ngOnInit() {
    this.product_id = this.activatedRoute.snapshot.params["product_id"];
    this.apiService.getItem(this.product_id.toString()).subscribe(response => {
      console.log(response);
      console.log(response.imagen);
      this.data = response;
      
      console.log(this.data.imagen);
      console.log(this.data);
    })
  }

  update() {
    this.apiService.updateItem(this.product_id, this.data).subscribe(response => {
      this.router.navigate(['productos-list']);
    })
  }

}
