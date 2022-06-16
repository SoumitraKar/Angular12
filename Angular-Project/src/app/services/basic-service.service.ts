import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { BYPASS_LOG } from './basic-interceptor.interceptor';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  constructor(private http : HttpClient) { }
  
  getAPIval () {
    let url = "https://jsonplaceholder.typicode.com/todos/1";
    return this.http.get(url);
  }  
  getAPIval2 () {
    let url = "https://jsonplaceholder.typicode.com/todos/2";
    return this.http.get(url, { context: new HttpContext().set(BYPASS_LOG, true) });
  }
}
