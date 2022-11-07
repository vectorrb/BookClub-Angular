import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginView } from '../models/LoginView';
import { User } from '../models/User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pwdPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{8,}";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  user: LoginView;
  userId: any;
  userFirstName: any;
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.user = {} as LoginView;
  }

  onFormSubmit(loginForm: NgForm) {
    this.userFirstName = this.user.userName.slice(0, -10);
    console.log('hello');   
    console.log('login - userFirstName');
    console.log(this.userFirstName);
    this.userFirstName = this.userFirstName.charAt(0).toUpperCase() + this.userFirstName.slice(1).toLowerCase();
    console.log(this.userFirstName);
    sessionStorage.setItem("userFirstName", this.userFirstName.toString());
    if(this.userFirstName == 'Rutuja'){
      this.userId = 1;
    } else if(this.userFirstName == 'Nisha'){
      this.userId = 2;
    } else if(this.userFirstName == 'Rohan'){
      this.userId = 3;
    } else{
      this.userId = 4;
    }
    sessionStorage.setItem("userId", this.userId.toString());
    this.route.navigateByUrl('books');
  }

  // onFormSubmit1(loginForm: NgForm) {
  //   this.userService.login(this.user).subscribe(data=>{
  //     if(data!=null){
  //       this.userId = data;
  //       sessionStorage.setItem("userId", this.userId.toString());

  //       this.userService.getUserFirstName(this.userId).subscribe(data =>{
  //         this.userFirstName = data;
  //         console.log(typeof(this.userFirstName));
  //         type ObjectKey = keyof typeof this.userFirstName;
  //         const myVar = 'userFirstName' as ObjectKey;
  //         this.userFirstName = this.userFirstName[myVar];
  //         console.log('userfirstname - login')
  //         console.log(this.userFirstName);
  //         sessionStorage.setItem("userFirstName", this.userId.toString());

  //       });
  //       // setTimeout(()=>{
  //       //   this.route.navigateByUrl('books');
  //       // }, 3000);
        
  //     }else{
  //       this.route.navigateByUrl('login');
  //     }

  //      setTimeout(()=>{
  //         this.route.navigateByUrl('books');
  //       }, 3000);
  //   });
  // }
}
