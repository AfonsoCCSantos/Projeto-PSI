import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { map, tap } from 'rxjs/operators';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "api/user";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUserByName(username: string): Observable<User> {
    const url = `${this.userUrl}/${username}`;
    return this.http.get<User>(url)
      .pipe(catchError( this.handleError<User>("Get user by name",undefined)));
  }
  
  registerUser(user: User): Observable<boolean> {
    const url = `${this.userUrl}/register`;
    return this.http.post(url, user, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        return response.status === 200;
      }),
      catchError((err) => {
        return of(false);
      })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


}
