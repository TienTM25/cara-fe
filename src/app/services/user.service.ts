import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = "http://localhost:3000/user/";

  constructor(private httpClient: HttpClient) { }

  public register(user: any){
    // localStorage.setItem('user', JSON.stringify(user));
    return this.httpClient.post(this.BASE_URL, user);
  }

  public get(){
    return this.httpClient.get<any[]>(this.BASE_URL);
  }

  public getUserById(id: number){
    return this.httpClient.get<any[]>(this.BASE_URL + id);
  }

  public updateUser(id: any, user: any) {
    return this.httpClient.put(`${this.BASE_URL}/${id}`, user);
  }
}
