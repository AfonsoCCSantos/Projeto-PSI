import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { User } from './user';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getUserByName(username: string): Observable<User> {
    const url = `${ this.baseUrl + "/user"}/${username}`;
    return this.http.get<User>(url);
  }
  
  registerUser(user: User): Observable<boolean> {
    const url = `${ this.baseUrl + "/user/register"}`;
    return this.http.post<HttpResponse<any>>(url, user, this.httpOptions).pipe(
      map((response : HttpResponse<any>) => {
        return response.status === 200;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }
}
