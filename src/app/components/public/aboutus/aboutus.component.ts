import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  user;

  constructor(private router:Router,private route:ActivatedRoute,private spinnerService: NgxSpinnerService,private authenticationService: AuthenticationService) {

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

  logout(){
    this.authenticationService.logout();
    
    console.log("Se cerró la sesión")
  }

}
