import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   api = "https://reqres.in/api/users"
  constructor(private http: HttpClient) { } //Private è must

  getUser(page: number, perPage: number){

    const x = `https://reqres.in/api/users?${page}&${perPage}`;


    return this.http.get(x);
  }
}
