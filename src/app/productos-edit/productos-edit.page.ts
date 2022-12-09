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
  imagedata!:any;
  product_id: number = 1;
  data: Productos;
  currentInput:any


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
    this.apiService.updateItem(this.data);
    this.router.navigate(['productos-list']);
  }
 
  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        console.log(target.files[0].name);
        const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onload = () => {
      console.log(reader.result)
      
      this.imagedata=reader.result?.toString()
      this.data.imagen= this.imagedata.replace(/^data:image\/[a-z]+;base64,/, "");
        console.log(reader.result);
    };
    }
}

}
