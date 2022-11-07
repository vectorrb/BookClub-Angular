import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/Book';
import { Genre } from '../models/Genre';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  selected: any;
  newBook: Book;
  genres: Genre[] = [
    { id: 0, genre: 'Drama'},
    { id: 1, genre: 'Fantasy'},
    { id: 2, genre: 'Historical'},
    { id: 3, genre: 'Horror'},
    { id: 4, genre: 'Mystery'},
    { id: 5, genre: 'Mythology'},
    { id: 6, genre: 'Biography-Autobiography'},
    { id: 7, genre: 'Non-fiction'},
    { id: 8, genre: 'Self-help'},
    { id: 9, genre: 'Suspense'}
  ];

  constructor(private bookService: BookService, private route: Router) { }

  ngOnInit(): void {
    this.newBook = {} as Book;
  }

  onFormSubmit(addBookForm: Form){
    this.newBook.likes = 0;
    this.newBook.dislikes = 0;
    console.log(this.newBook);

    this.bookService.addBook(this.newBook).subscribe(data =>{
      this.route.navigateByUrl('allbooks');
    });
  }
}
