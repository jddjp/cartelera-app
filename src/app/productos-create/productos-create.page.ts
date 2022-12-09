import { Component, OnInit ,EventEmitter} from '@angular/core';
import { Productos } from '../models/productos';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-productos-create',
  templateUrl: './productos-create.page.html',
  styleUrls: ['./productos-create.page.scss'],
})
export class ProductosCreatePage implements OnInit {
  imagedata!:any;
  data: Productos
  currentInput:any

  constructor(
    public apiService: ApiService,
    public router: Router,

  ) {
    this.data = new Productos();
  }

  ngOnInit() {
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
  



  submitForm() {

    
    this.apiService.createItem(this.data).subscribe((response) => {
      console.log(response)
      this.router.navigate(['productos-list']);
    });

  }

}


