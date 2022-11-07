import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-likedlist',
  templateUrl: './likedlist.component.html',
  styleUrls: ['./likedlist.component.css']
})
export class LikedlistComponent implements OnInit {
  bookList: Book[] = [];
  userId: number;

  constructor(private bookService: BookService, private activateRoute: ActivatedRoute) {
    this.bookList = {} as Book[];
   }

  ngOnInit(): void {
    this.userId = this.activateRoute.snapshot.params["id"];
    this.bookService.getBooksUserLiked(this.userId).subscribe(data=>{
      this.bookList = data;
    })
  }

  deleteProduct(userId: number, bookId: number){
    if(confirm("Are you sure?")){
      this.bookService.deleteUserLiked(userId, bookId);
      // alert("Product Deleted");
      this.bookService.getBooksUserLiked(this.userId).subscribe(data=>{
        this.bookList = data;
      })
    }
  }

}
