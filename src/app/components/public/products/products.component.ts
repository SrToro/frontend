import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  user;

  constructor(private router:Router,private route:ActivatedRoute, private productsService: ProductsService, private spinnerService: NgxSpinnerService,private authenticationService: AuthenticationService) {
    this.productsService.getProducts().subscribe(response => {
      let res: any = response.body;
      this.products = res.data.getProducts;
      console.log(res.data.getProducts)
    })
    this.user = this.authenticationService.user;
  }
 
  navigate(route){
    console.log("navigate to "+route)
    this.router.navigate([route]);
  }
  ngOnInit(){
    this.spinner();
  }
  
  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1300);
  }

  setProduct(product){
     
    let productExistOnCar = this.productsService.car.filter(item => item.product === product._id).length > 0;
    
    if(!productExistOnCar){
      console.log(product._id)
      this.productsService.car.push(
        { 
          product: product._id,
          img: product.img,
          description: product.description,
          name: product.name,
          price: product.price,
          stock: product.stock,
          quantity:1
        });
        console.log(this.productsService.car)
    }
  }

  goToCar(){
    console.log('navigate')
    this.router.navigate(["car"]);
  }

  logout(){
    this.authenticationService.logout();
    
    console.log("Se cerró la sesión")
  }

}
