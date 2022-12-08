//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Productos } from '../models/productos';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { responseModel } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'http://localhost/CodeIgniter4';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers':'Content-Type'
      })
  }

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
  updateItem(id: any, item: any): Observable<Productos> {
    return this.http
      .put<Productos>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(productid: string) {
    return this.http
      .delete<responseModel>(this.base_path + '/products/' + 13)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}