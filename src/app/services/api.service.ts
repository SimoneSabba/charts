import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const dataJSON = 'assets/web_test.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private readonly http: HttpClient) { }

  getData() {
    return this.http.get(dataJSON);
  }
}
