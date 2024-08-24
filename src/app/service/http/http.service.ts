import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'winston';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient ) { }

  postSignin(body: any) : any {
    return this.httpClient.post('http://localhost:3000/login', 
      {
        "username": body.username,
        "email": body.email,
        "password": body.password
      } 
    );
  }

  getLogin() : any {
    return this.httpClient.get('http://localhost:3000/login');
  }

  getProductDetails(): any {
    return this.httpClient.get('http://localhost:3000/Product');
  }

  postReview(id:any,review:string): any {

    this.httpClient.get(`http://localhost:3000/Product/${id}`).subscribe((product: any) => {
      //------------ Add the new review to the reviews array
      product.reviews.push(review);

      //------------ Update the product with the new review
      this.httpClient.put(`http://localhost:3000/Product/${id}`, product).subscribe(response => {
          console.log('Review added successfully', response);
      }, error => {
          console.error('Error adding review', error);
      });
    }, 
    error => {
      console.error('Error fetching product', error);
    });
  }
}
