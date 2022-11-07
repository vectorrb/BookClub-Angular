import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
import { Book } from './models/Book';
import { SingleComment } from './models/Comment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = environment.baseUrl + "book/";
  constructor(private http: HttpClient) { }

  getAllBooks():Observable<any>{
    return this.http.get<any>(this.url);
  }

  getBookInfoByBookId(bookId: number):Observable<any>{
    return this.http.get<any>(this.url+ bookId);
  }

  getBooksByGenre(genre: string):Observable<any>{
    return this.http.get<any>(this.url+"genre/"+genre);
  }

  //returns book details by bookId
  getBookById(id:number):Observable<any>{
    return this.http.get<any>(this.url+id);
  }

  getCommentsById(id:number):Observable<any>{
    return this.http.get<any>(this.url+"comments/"+id);
  }

  postCommentsByBookId(newComment: SingleComment):Observable<any>{
    console.log(newComment)
    return this.http.post<any>(this.url+"postcomment/", newComment);
  }

  addBook(newBook: Book):Observable<any>{
    return this.http.post<any>(this.url+"addbook/", newBook);
  }

  getBooksUserLiked(id: number):Observable<any>{
    return this.http.get<any>(this.url+"seeYourLikedBooks/"+id);
  }

  deleteUserLiked(userId: number, bookId: number):Observable<any>{
    return this.http.post<any>(this.url+"removeFromUsersLiked/"+userId, bookId);
  }

  editBook(bookId: number, updatedBook: Book):Observable<any>{
    return this.http.put<any>(this.url+"edit/"+bookId, updatedBook);
  }

  deleteBook(bookId: number):Observable<any>{
    return this.http.delete<any>(this.url+"delete/"+bookId);
  }
}
