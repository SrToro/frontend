import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  wrong = false;

  form = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  })

  constructor(private router:Router,private route:ActivatedRoute, private authenticationService: AuthenticationService, private spinnerService: NgxSpinnerService) { }

  ngOnInit(){
    this.spinner();
  }
  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1300);
  }

  login(){
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    
    this.authenticationService.user = this.form.value.email;
    this.authenticationService.password= this.form.value.password;

    this.authenticationService.authUser().subscribe(response => {
      console.log(response)
      if(response.body.data.authUser){
        console.log("Works")
        this.router.navigate(["haircut"]);
        // if(response.body.data.){

        // }

      }
      else{
        console.log("Wrong")
        this.wrong = true;
      }
    })

  }

  goToSignup(){
    this.router.navigate(["signup"])
  }


}
