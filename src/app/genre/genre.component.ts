import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  bookList: Book[] = [];

  constructor( private route: Router, private activeroute: ActivatedRoute,private bookService: BookService) { }

  ngOnInit(): void {
    let genre = this.activeroute.snapshot.params["genre"];

    if(genre == 'all'){
      this.bookService.getAllBooks().subscribe(data=>{
        this.bookList = data;
        console.log(this.bookList);
      })
    }else{
      console.log(genre);
      this.bookService.getBooksByGenre(genre).subscribe(data=>{
      this.bookList = data;
      })
    }

    
  }

  
}
