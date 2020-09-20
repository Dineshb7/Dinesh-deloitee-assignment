import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  updateSearchedText = new BehaviorSubject<string>('');
  updateSearchedTextValue = this.updateSearchedText.asObservable();
  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get('https://randomuser.me/api?results=100',httpOptions)
  }

  getmemberData(){
    return  this.http.get('/api/profile');
  }

  updateSearch(SearchValue){
    this.updateSearchedText.next(SearchValue);
  }
}
