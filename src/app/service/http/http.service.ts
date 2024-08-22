import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient ) { }

  getLogin() : any {
    return this.httpClient.get('http://localhost:3000/login');
  }

  getProductDetails(): any {
    return this.httpClient.get('http://localhost:3000/Product');
  }
}
