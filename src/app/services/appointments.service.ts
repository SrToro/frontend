import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  barber: string;
  date: string;
  hairCut: string;
  hour: string;

  constructor(private http: HttpClient) { }

  getHaircuts(): Observable<any>{
    return this.http.post(
      'http://localhost:3000/graphql',
      `query{getHaircuts{_id,name,price,imag,time}}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe: 'response'
      }
    )
  }

  getBarbers(){
    return this.http.post(
      'http://localhost:3000/graphql',
      `query{getBarbers{_id,name,correo,tel,imag}}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe:'response' 
      }
    )
  }

  addAppointment(user,date,barber,hairCut,hour): Observable<any>{
    return this.http.post(
      'http://localhost:3000/graphql',
      `mutation{addAppointment(appointmentInput:{user:"${user}",date:"${date}",barber:"${barber}",hairCut:"${hairCut}",hour:${hour}})}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe: 'response'
      }
    )
  }

  getAppointment(_id): Observable<any> {
    return this.http.post(
      'http://localhost:3000/graphql',
      `query{getAppointment(_id){date, hour, _id}}`,
      {
        headers: new HttpHeaders({'Content-Type':'application/graphql'}),
        observe:'response' 
      }
    )
  }


}
