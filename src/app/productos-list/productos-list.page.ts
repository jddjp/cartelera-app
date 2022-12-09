import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.page.html',
  styleUrls: ['./productos-list.page.scss'],
})
export class ProductosListPage implements OnInit {

  studentsData: any;
  imageSource:any;
  constructor(
    private sanitizer: DomSanitizer,
    public apiService: ApiService
  ) {
    this.studentsData = [];
  }

  ngOnInit() {
    // this.getAllStudents();
   
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllStudents();
  }

  getAllStudents() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
    
      this.studentsData = response;
    })
  }

 

  delete(item:any) {
    console.log("==>"+item)
    this.apiService.deleteItem(item).subscribe(Response => {
      
      //Update list after delete is successful
      this.getAllStudents();
    });
    
  }

}
