import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  public apiUrl = 'https://random-data-api.com/api/coffee/random_coffee';

  constructor(public http: HttpClient) {}

  getCoffees(count: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?size=${count}`);
  }
}