import {formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  userList: User[] = [];
  s: string;
  count : number;

  constructor(private userService: UserService) { 
    this.count = 1;
  }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe(data =>{
      this.userList = data;
      this.s = formatDate(this.userList[0].dateOfBirth, 'yyyy-MM-dd', 'en-US');
    }); 


  }

}
