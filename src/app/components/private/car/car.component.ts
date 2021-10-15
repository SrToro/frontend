import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car = undefined;
  user;
  payDone= false;
  

  constructor(private router:Router,private route:ActivatedRoute, private productsService: ProductsService, private authenticationService: AuthenticationService) { 
    this.car = this.productsService.car;
    this.user = this.authenticationService.user;
    console.log(this.car)
  }

  ngOnInit(): void {  }

  

  navigate(route){
    console.log("navigate to "+route)
    this.router.navigate([route]);
  }

  updateQuantity(event, item){
    item.quantity = parseInt(event.target.value);
    console.log(this.productsService.car)
  }


  pay(){
    console.log("pagando...")

    console.log(this.car)
    let user = this.authenticationService.user;



    this.car.forEach(item => {
      this.productsService.addPurchaseOrder(user,item.product,item.quantity).subscribe(response => console.log(response))
    });

    window.open("https://cajero.co/cajeropagofacil?gclid=Cj0KCQjw38-DBhDpARIsADJ3kjlUe3g3ZDl1pGThm1BWjIC08KK573Z5Q45JYwt_saWiRrtkQ41j-VIaAn7BEALw_wcB");

    setTimeout(()=>{

      this.payDone = true;
      console.log(this.payDone)

    }, 100 )

    this.car.splice(this.car)

    console.log(this.car)

    
  }

  deleteItem(index){
    console.log("deleteitem")
    console.log(this.car)

    
    this.car.splice(index, 1)
    console.log(this.car)

  }

  logout(){
    this.authenticationService.logout();
    
    console.log("Se cerró la sesión")
  }

}
