import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AranzmanService {

  url: string = 'http://localhost:8000/api';
  constructor(private http:HttpClient){}

  getAranzmani(): Observable<any>{

    return this.http.get(`${this.url}/aranzmani`);
  }


  getAranzmaniUser():Observable<any>{
    return this.http.get(`${this.url}/moji_aranzmani`);
  }

}
