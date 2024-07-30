import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }


  //metoda get profile vadi iz apija osobu ciji je ovo profil i vraca tu osobu na osnovu localStorage tokena koji se upamtio u vreme loga/registrovanja
  getProfile(): Observable<any> {
    return this.http.get(`${this.url}/profile`);
  }






}
