import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {



  constructor(private router:Router,private route:ActivatedRoute, private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  navigate(route){
    console.log("navigate to "+route)
    this.router.navigate([route]);
  }

}
