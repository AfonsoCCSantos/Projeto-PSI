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

  add_item_to_wishlist(user_name : String, item_id : String) : Observable<any> {
    let url = `${this.userUrl}/${user_name}/wishlist`;
    return this.http.post<any>(url, {item_id:item_id}, this.httpOptions).pipe(
      catchError(this.handleError<any>('add_item_to_wishlist',undefined))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


}
