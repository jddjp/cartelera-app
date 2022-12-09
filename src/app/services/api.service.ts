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

  
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Handle API errors
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
    
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  // Create a new item
  createItem(item: Productos): Observable<Productos> {
    console.log(JSON.stringify(item).toString())
    return this.http
      .post<Productos>('http://localhost/CodeIgniter4/products', JSON.stringify(item))
      .pipe(
        retry(2),
        catchError(this.handleError<Productos>('create'))
      )
  }

  // Get single productos data by ID
  getItem(productid: string): Observable<Productos> {
    return this.http
      .get<Productos>(this.base_path + '/products/' + productid)
      .pipe(
        retry(2),
        catchError(this.handleError<Productos>('get'))
      )
  }

  // Get productoss data
  getList(): Observable<Productos> {
    return this.http
      .get<Productos>(this.base_path + '/products')
      .pipe(
        retry(2),
        catchError(this.handleError<Productos>('get id'))
      )
  }

  // Update item by id
  updateItem(item: Productos):Observable<Productos>{
    return this.http.put<Productos>('http://localhost/CodeIgniter4/products/1', JSON.stringify(item))
    .pipe(
      retry(2),
      catchError(this.handleError<Productos>('create'))
    )
  }

  // Delete item by id
  deleteItem(productid: string){
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: 'http://localhost/CodeIgniter4/products/3',
      headers: { }
    };
    
    axios(config)
    .then(function (response: { data: any; }) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error: any) {
      console.log(error);
    });
    
  }


}