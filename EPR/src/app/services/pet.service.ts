import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

//import user class to create observables
import { Pet } from '../classes/pet'
import { Observable } from '../../../node_modules/rxjs';
import { catchError } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  public baseApiURL: string = environment.baseApiUrl;

  //get all users - base + swap with real endpoint later
  public getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseApiURL + 'dbo_pets.json?key=937c3910', this.httpOptions)

  }
}