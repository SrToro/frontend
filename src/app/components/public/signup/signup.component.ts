import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  wrong = false;
  userCreated= false;

  form = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    password: new FormControl(""),
  })

  constructor(private router:Router,private route:ActivatedRoute, private authenticationService: AuthenticationService,private spinnerService: NgxSpinnerService) {

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

  signup(){
    console.log(this.form.value.name);
    console.log(this.form.value.phone);
    console.log(this.form.value.email);
    console.log(this.form.value.password);


    this.authenticationService.user = this.form.value.email;
    
        let name = this.form.value.name;
        let phone = this.form.value.phone;
        let email = this.form.value.email;
        let password= this.form.value.password;

        this.authenticationService.createUser(name,email,password,phone).subscribe(response => {
          console.log("UserRegistered")
          console.log(response)
          if(response.body.data.createUser){
            this.authenticationService.user = this.form.value.email;
            this.authenticationService.password= this.form.value.password;
            console.log(this.wrong)
            this.wrong = false;
            this.userCreated = true;
            console.log(this.userCreated)

          }else{
            this.wrong = true;
            console.log(this.wrong)
          }
        })

  }


  navigate(route){
    console.log("navigate to "+route)
    this.router.navigate([route]);
  }
  

}
