import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { Hobby } from '../models/Hobby';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pwdPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{8,}";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  user: User;
  hobbies: Hobby[] = [
    { id: 0, hobby: 'Painting'},
    { id: 1, hobby: 'Reading'},
    { id: 2, hobby: 'Travelling'},
  ];
  form: FormGroup;
  hobbiess :string;
  value: number;
  hobbyIndex: number[] = [];
  dob: Date;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.user = {} as User;
    this.form = {} as FormGroup;
    this.hobbiess = '';
    this.dob = {} as Date;
  }
  onFormSubmit(loginForm: NgForm) {
    this.hobbiess = '';
    // this.user.hobbies = this.hobbiess;
    // console.log('this.user.hobbiess');
    // console.log(this.hobbiess);
    // this.user.hobbies = this.user.hobbies.slice(0,-2);

    // console.log('this.user.hobbies - ');
    // console.log(this.user.hobbies);

    console.log('date - ');
    console.log(this.user.dateOfBirth);
    this.hobbyIndex.forEach(hobbyId => {
      this.hobbiess +=  this.hobbies[hobbyId].hobby + ', ';
    });
    this.user.hobbies = this.hobbiess.slice(0,-2);
    console.log(this.user.hobbies);
    this.user.password = sha256(this.user.password);
    console.log(this.user.password);
    this.userService.register(this.user).subscribe(data =>{
      this.route.navigateByUrl('login');
    });
  }

  onChangeCheckbox(name: string, event: Event) {
    const isChecked = (<HTMLInputElement>event.target).checked
    console.log('hobby name - ');
    console.log(name);
    this.value = this.hobbies.findIndex(x => x.hobby === name);

    if(isChecked){
      this.hobbyIndex.push(this.value)
    } else{
      let index = this.hobbyIndex.findIndex(h=> h == this.value);
      this.hobbyIndex.splice(index, 1);      
    }
    console.log(this.hobbyIndex)
    // console.log(this.hobbiess);
  }

  onChangeRadio(event: Event){
      let e:string = (<HTMLInputElement>event.target).value;
      if(e == '0'){
        this.user.gender = false;
      } else{
        this.user.gender = true;
      }

      console.log(this.user.gender);
  }
  f = new Date();

  onChangeDate(event: Event){

    // <HTMLInputElement>event.target).valueAsDate = new Date();

  }
}
