import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-barber',
  templateUrl: './barber.component.html',
  styleUrls: ['./barber.component.css']
})
export class BarberComponent implements OnInit {

  barbers: any;

  constructor(private router:Router,private route:ActivatedRoute, private appointmentsService: AppointmentsService) { 
    this.appointmentsService.getBarbers().subscribe(response => {
      let res: any = response.body;
      this.barbers = res.data.getBarbers;
      console.log(res.data.getBarbers)
    })
  }

  setBarber(barberId){
    this.appointmentsService.barber = barberId;
    console.log(this.appointmentsService.barber)
    this.router.navigate(["appointment"]);
  }


  ngOnInit(): void { }

}
