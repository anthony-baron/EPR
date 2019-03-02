import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Pet } from '../classes/pet'
import { Observable } from '../../../node_modules/rxjs';
import { catchError } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  public baseApiURL: string = environment.baseApiUrl;
  public baseGoogleApiURL: string = environment.baseGoogleApiURL;

  constructor(private http: HttpClient) { }
}
