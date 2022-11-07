import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/Book';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SingleComment } from '../models/Comment';
import { faEye } from '@fortawesome/free-regular-svg-icons'


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  bookList: Book[] = [];
  userId: number;
  comments: SingleComment[] = [];
  userFirstName: any;
  genreSelfhelp = 'Self-help';
  genreBiography = 'Biography';
  genreMystery = 'Mystery';
  genreAll = 'all';
  faEyeIcon = faEye;
  
  constructor(private bookService: BookService, 
    private userService: UserService,
    private toastr: ToastrService,
    private route: Router) { }

  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem("userId"));
    this.userFirstName = sessionStorage.getItem("userFirstName")?.toString();

    this.bookService.getAllBooks().subscribe(data=>{
      this.bookList = data;
      console.log(this.bookList);
    })
  }
  Logout(){
    sessionStorage.clear();
    this.toastr.success("", "Logging you out....", {
      titleClass: "center",
      messageClass: "center"
    });
    setTimeout(()=>{
      this.route.navigateByUrl('');
    }, 8000);
  }
}
