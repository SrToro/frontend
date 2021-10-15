import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user = undefined;
  password;

  userData;

  constructor(private router:Router,private route:ActivatedRoute,private http: HttpClient, private productsService: ProductsService) { 
    console.log(this.user)
  }

  authUser(): Observable<any>{
    return this.http.post(
      'http://localhost:3000/graphql',
      `query{authUser(email:"${this.user}",password:"${this.password}")}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe:'response' 
      }
    )
  }

  findUser(): Observable<any>{
    return this.http.post(
      'http://localhost:3000/graphql',
      `query{findUser(email:"${this.user}")}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe:'response'
      }
    )
  }

  createUser(name,email,password,phoneNumber): Observable<any>{
    return this.http.post(
      'http://localhost:3000/graphql',
      `mutation{createUser(userInput:{name:"${name}", email:"${email}",password:"${password}", phoneNumber:${phoneNumber}, tipo: "common" }){
        _id
      }}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe:'response' 
      }
    )
  }

  getUser():Observable<any>{
    return this.http.post(
      'http://localhost:3000/graphql',
      `query{getUser(email:"${this.user}"){
        name
        phoneNumber
        email
        tipo
          appointments{
            _id
            date
            hour
            hairCutSelected{
              name
              imag
            }
            barberSelected{
              name
              tel
              imag
            }
          }
          purchaseOrder{
            _id
            products{
              name
              price
              img
            }
            quantity
          }
        }}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe:'response' 
      }
    )
  }

  logout(){
    this.user = null;
    this.password = null;
    this.userData = null;
    this.productsService.car = [];
    this.router.navigate(["haircut"]);
  }

}
