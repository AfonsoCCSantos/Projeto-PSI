import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Item } from 'src/app/Item';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = '/api/items';
  private itemUrl = '/api/item';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http : HttpClient,
    private messageService : MessageService
    ) { }

  searchItems(term: string): Observable<Item[]> {
    if(!term.trim()) {
      return of([]);
    }

    return this.http.get<Item[]>(`${this.itemsUrl}/search/?name=${term}`).pipe(
      catchError(this.handleError<Item []>('searchItems', []))
      );
  }

  getItem(id: string): Observable<Item> {
    const url = `${this.itemUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl).pipe(
      tap(_ => this.log(`fetched items`)),
      catchError(this.handleError<Item[]>(`getItems`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ItemService: ${message}`);
  }
}
