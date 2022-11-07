import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
import { LoginView } from './models/LoginView';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url= environment.baseUrl + "User/";
  constructor(private http: HttpClient) { }

  login(user: LoginView):Observable<any>{
    console.log(user);
    return this.http.post<any>(this.url+"login/", user);
  }

  register(newUser: User):Observable<any>{
    return this.http.post<any>(this.url+"register/", newUser);
  }

  getUserFirstName(userId: number):Observable<any>{
    return this.http.get<any>(this.url+"userfirstname/"+ userId);
  }

  getUsersList():Observable<any>{
    return this.http.get<any>(this.url+"userslist/");
  }

  
  
}
