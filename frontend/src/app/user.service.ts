import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getHero(userName: string): Observable<User> {
    const url = `${ this.baseUrl + "/profile"}/${userName}`;
    return this.http.get<User>( url);
  }
}
