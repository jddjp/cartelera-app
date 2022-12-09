//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Productos } from '../models/productos';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { responseModel } from '../models/response';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'http://localhost/CodeIgniter4';
  postId: any;

  
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };



  // Create a new item
  createItem(item: Productos): Observable<Productos> {
    console.log(JSON.stringify(item).toString())
    return this.http
      .post<Productos>('http://localhost/CodeIgniter4/products', JSON.stringify(item))
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single productos data by ID
  getItem(productid: string): Observable<Productos> {
    return this.http
      .get<Productos>(this.base_path + '/products/' + productid)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get productoss data
  getList(): Observable<Productos> {
    return this.http
      .get<Productos>(this.base_path + '/products')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update item by id
  updateItem(item: Productos){
    console.log(JSON.stringify(item).toString())
    console.log(this.base_path + '/products/' + item.product_id, JSON.stringify(item))
    console.log(this.base_path + '/products/' + item.product_id)
    return this.http
      .put<Productos>(this.base_path + '/products/' + item.product_id, JSON.stringify(item))
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(productid: string): Observable<responseModel>{
    console.log("=>DELETE:"+this.base_path + '/products/' + productid)
      return this.http
        .delete<responseModel>(this.base_path + '/products/' + productid)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  
}