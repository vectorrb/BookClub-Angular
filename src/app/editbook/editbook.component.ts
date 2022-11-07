import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/Book';
import { Genre } from '../models/Genre';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  book : Book;
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
  id: any;
  constructor(private bookService: BookService, private activeroute: ActivatedRoute,
    private route: Router) {  }

  ngOnInit(): void {
    this.book = {} as Book;
    this.id = this.activeroute.snapshot.params["id"];
    this.bookService.getBookById(this.id).subscribe(data=>{
      this.book = data;
    });
    this.book.genre = this.genres[parseInt(this.book.genre)].genre;
  }
  onSubmit(myform:any){
    this.bookService.editBook(this.id, this.book).subscribe(data => {

    })
    this.route.navigate(['/allbooks']);
  }
}
