import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private client: HttpClient) { }
  public login(email: string, password: string, type: string) :Observable<any>{
    return this.client.post<any>("http://localhost:8080/login?email="+ email  + "&password="
    + password+ "&type=" +type, "");
  }
}
