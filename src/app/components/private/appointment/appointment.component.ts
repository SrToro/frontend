import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  minDate: string;

  wrong= false;

  appointmentDone = false;

  form = new FormGroup({
    date: new FormControl(""),
    hour: new FormControl(""),
  })


  
  constructor(private router:Router,private route:ActivatedRoute, private authenticationService: AuthenticationService, private appointmentsService: AppointmentsService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner();
    let date =  new Date();

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
      if(day < 10){
        console.log(`${year}-0${month}-0${day}`)
        this.minDate = `${year}-0${month}-0${day}`
      }
      else{
        console.log(`${year}-0${month}-${day}`)
        this.minDate = `${year}-0${month}-${day}`
      }
    }else{
      if(day < 10){
        console.log(`${year}-${month}-0${day}`)
        this.minDate = `${year}-${month}-0${day}`
      }
      else{
        console.log(`${year}-${month}-${day}`)
        this.minDate = `${year}-${month}-${day}`
      }
    }
  }

  validateDate(){
   

    let user = this.authenticationService.user;
    let date = this.form.value.date;
    let hour = this.form.value.hour;
    let barber = this.appointmentsService.barber;
    let hairCut = this.appointmentsService.hairCut;

    console.log(user);
    console.log(date);
    console.log(hour);
    console.log(barber);
    console.log(hairCut);

    this.appointmentsService.addAppointment(user,date,barber,hairCut,hour).subscribe(response => {
      console.log(response)
      // this.router.navigate(["receipt"]);
        this.appointmentDone = true;
        console.log(this.appointmentDone)
    });

    

    if(hour == "" || date == undefined ){
      this.wrong = true;
    }
    else{
      this.wrong = false;
    }


  }

  navigate(route){
    console.log("navigate to "+route)
    this.router.navigate([route]);
  }

  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1300);
  }

}
