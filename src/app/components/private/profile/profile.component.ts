import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;

  constructor(private router:Router,private route:ActivatedRoute, private authenticationService:AuthenticationService) {

    console.log("Here")
    this.authenticationService.getUser().subscribe(response => {
      console.log(response)
      this.user = response.body.data.getUser});

      console.log(this.user)

  }

  navigate(route){
    console.log("navigate to "+route)
    this.router.navigate([route]);
  }

  ngOnInit(): void { }

  logout(){
    this.authenticationService.logout();
    
    console.log("Se cerró la sesión")
  }

}
