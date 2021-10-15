import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute, private authenticationService: AuthenticationService,private appointmentsService: AppointmentsService) { 
    console.log("Here")
    // let user = this.authenticationService.getUser()

    // this.

    // this.appointmentsService.getAppointment(_id).subscribe(response => {
    //   console.log(response)
    //   this.appointment = response.body.data.getAppointment});

    //   console.log(this.appointment)

  }

  ngOnInit(): void {
  }

  

}
