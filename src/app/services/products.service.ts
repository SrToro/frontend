import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  car = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.post(
      'http://localhost:3000/graphql',
      `query{getProducts{_id,name,price,stock,img,description}}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe: 'response'
      }
    )
  }

  addPurchaseOrder(user,product,quantity): Observable<any>{
    return this.http.post(
      'http://localhost:3000/graphql',
      `mutation{addPurchaseOrder(user:"${user}",product:"${product}",quantity:${quantity})}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe: 'response'
      }
    )
  }


}
