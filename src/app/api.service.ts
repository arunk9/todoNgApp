import { User } from './shared/models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_END_POINT: string = environment.APIEndPoint;

  constructor(private httpClient: HttpClient)  { }

  login (username: string, password: string): Observable<User> {

    return this.httpClient.post<User>(this.API_END_POINT, {
      username: username,
      password: password
    });
  }
}
