import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) { }

  getUserData(){
    console.log("service file")
    return this.http.get('https://randomuser.me/api?results=100',httpOptions)
  }
}
