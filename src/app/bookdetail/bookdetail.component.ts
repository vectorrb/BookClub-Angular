import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/Book';
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown} from '@fortawesome/free-regular-svg-icons'
import { CommentUser } from '../models/CommentUser';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { SingleComment } from '../models/Comment';
import { Genre } from '../models/Genre';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  book: Book;
  comments: SingleComment[] = [];
  // userId: any;
  commentUserList: CommentUser[] = [];
  commentUser: CommentUser;
  newComment: string = '';
  addComment: SingleComment;
  bookID: number;
  // u: UserLikeDislike;
  userFirstName: any;
  farThumbsUpIcon = farThumbsUp;
  farThumbsDownIcon = farThumbsDown;
  userId: any;
  display = "none";
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
  userFN: any;


  constructor(private bookService: BookService, 
    private activateRoute: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService,
    private userService: UserService,
    nameElement: ElementRef,) { 
      this.newCommentElement = nameElement;
    }
    @ViewChild('newComment', { static: true }) newCommentElement: ElementRef;
    newCommentValue: string = "";
  ngOnInit(): void {
    this.commentUser = {} as CommentUser;
    this.addComment = {} as SingleComment;
    this.userId = Number(sessionStorage.getItem("userId"));
    
    this.id = this.activateRoute.snapshot.params["id"];
    this.userFirstName = sessionStorage.getItem("userFirstName");
    this.bookService.getBookById(this.id).subscribe(data=>
      {
        this.book = data;
        this.book.genre = this.genres[parseInt(this.book.genre)].genre;
        console.log(data);
      }); 

      this.userService.getUserFirstName(this.userId).subscribe(data =>{
        this.userFirstName = data;
        console.log(typeof(this.userFirstName));
        type ObjectKey = keyof typeof this.userFirstName;
        const myVar = 'userFirstName' as ObjectKey;
        this.userFirstName = this.userFirstName[myVar];
        console.log('userfirstname - login')
        console.log(this.userFirstName);
  
      });
      this.bookService.getCommentsById(this.id).subscribe(data=>{
        this.comments = data;
        console.log(data);
        for(let comment of this.comments){
          this.userService.getUserFirstName(comment.userId).subscribe(user=>{
            
          this.userFN = user;
          console.log(typeof(this.userFN));
          type ObjectKey = keyof typeof this.userFN;
          const myVar = 'userFirstName' as ObjectKey;
          this.userFN = this.userFN[myVar];
          console.log('userfirstname - login')
          console.log(this.userFN);


          console.log(comment.userId);
          this.commentUser.firstName = this.userFN;
          console.log(this.commentUser.firstName);
          this.commentUser.comment = comment.comment;
          this.commentUserList.push(this.commentUser);
          this.commentUser = {} as CommentUser;
          console.log(this.commentUserList);
          });
        }
      });

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
  
  onCommentFormSubmit(commentForm: NgForm) {
    let id = this.activateRoute.snapshot.params["id"];

    this.addComment.userId = Number(sessionStorage.getItem("userId"));
    this.addComment.bookId = id;
    
    console.log(this.newComment)
    this.addComment.comment = this.newCommentElement.nativeElement.value;
    this.bookService.postCommentsByBookId(this.addComment).subscribe(data=>{
    this.commentUserList.splice(0);
    // this.route.navigateByUrl('/books/detail/'+id);
      this.bookService.getCommentsById(this.id).subscribe(data=>{
        this.comments = data;
        console.log(data);
        this.commentUserList.splice(0);
        console.log('hello after post comment - ');
        console.log(this.commentUserList);
        for(let comment of this.comments){
          this.userService.getUserFirstName(comment.userId).subscribe(user=>{
            this.userFN = user;
            // console.log(typeof(this.userFN));
            type ObjectKey = keyof typeof this.userFN;
            const myVar = 'userFirstName' as ObjectKey;
            this.userFN = this.userFN[myVar];
            // console.log('userfirstname - login')
            // console.log(this.userFN);
  
  
            // console.log(comment.userId);
            this.commentUser.firstName = this.userFN;


            this.commentUser.comment = comment.comment;
            this.commentUserList.push(this.commentUser);
            this.commentUser = {} as CommentUser;
            // console.log(this.commentUserList);
          });
        }
      });
    });

    


}
openModal() {
  this.display = "block";
}
onCloseHandled() {
  this.display = "none";
}
deleteBook(){
  this.bookService.deleteBook(this.id).subscribe(data=>{
    this.route.navigate(['/allbooks']);
  });
}
}
