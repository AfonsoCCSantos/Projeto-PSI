import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "api/user";
  constructor(private http: HttpClient) { }

  getUserByName(username: string): Observable<User> {
    const url = `${this.userUrl}/${username}`;
    return this.http.get<User>(url)
      .pipe(catchError( this.handleError<User>("Get user by name",undefined)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


}
