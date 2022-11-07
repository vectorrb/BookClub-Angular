import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/Book';
import { Genre } from '../models/Genre';
import { faEdit, faEye } from '@fortawesome/free-regular-svg-icons'


@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  bookList: Book[] = [];
  faEditIcon = faEdit;
  faEyeIcon = faEye;

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
  constructor(private bookService: BookService) { 
    this.bookService.getAllBooks().subscribe(data=>{
      this.bookList = data;
      this.bookList.forEach(book => {
        book.genre = this.genres[parseInt(book.genre)].genre;
      });
    });
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data=>{
      this.bookList = data;
      this.bookList.forEach(book => {
        book.genre = this.genres[parseInt(book.genre)].genre;
      });
    });
  }

}
