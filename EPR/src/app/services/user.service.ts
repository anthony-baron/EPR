import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

//import user class to create observables
import { User } from '../classes/user'
import { Observable } from '../../../node_modules/rxjs';
import { catchError } from '../../../node_modules/rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})


export class UserService {



  constructor(private http: HttpClient) { }
 // const apiHeaders
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

 public baseApiURL: string = environment.baseApiUrl;

 //get all users - base + swap with real endpoint later
 public getAllUsers(): Observable<User[]>{
   return this.http.get<User[]>(this.baseApiURL + 'dbo_user.json/mockUsers?key=937c3910', this.httpOptions)
  
 }
 public getBaseEndpoint(){
   
 }
}
