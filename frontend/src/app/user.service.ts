import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "api/user";
  constructor(private http: HttpClient) { }

  getUserByName(username: string): Observable<User> {
    const url = `${this.userUrl}/${username}`;
    return this.http.get<User>(url);
  }
}
