import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HtmlTagDefinition } from '@angular/compiler';
@Component({
  selector: 'app-haircut',
  templateUrl: './haircut.component.html',
  styleUrls: ['./haircut.component.css']
})
export class HaircutComponent implements OnInit {

  haircuts: any;
  user;

  constructor(private router:Router,private route:ActivatedRoute, private authenticationService: AuthenticationService, 
    private appointmentsService: AppointmentsService,private spinnerService: NgxSpinnerService) {
    this.appointmentsService.getHaircuts().subscribe(response => {
      let res: any = response.body;
      this.haircuts = res.data.getHaircuts;
      console.log(res.data.getHaircuts)
    })

    this.user = this.authenticationService.user;

  }

  setHaircut(haircutId){
    console.log(this.appointmentsService.hairCut)
    this.appointmentsService.hairCut = haircutId;
    if(this.authenticationService.user){
      this.router.navigate(["barber"]);
    }
    else{
      this.router.navigate(["authentication"]);
    }

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

  navigate(route){
    console.log("navigate to "+route)
    this.router.navigate([route]);
  }

  logout(){
    this.authenticationService.logout();
    
    console.log("Se cerró la sesión")
  }

}
