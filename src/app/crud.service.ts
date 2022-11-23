import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userData:any;
  constructor(private http:HttpClient) { }

  
  //add new user    
  public adduser(userData:any)
  {
    //  return this.http.post('http://localhost/users.php/'
    //    ,userData).subscribe(function (res: Response) {
    //      console.log(res);
    //    });
  }
  
}
