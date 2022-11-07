import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BooklistComponent } from './booklist/booklist.component';
import { EditbookComponent } from './editbook/editbook.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { LikedlistComponent } from './likedlist/likedlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "join", component: RegisterComponent},
  {path: "books", component: BooklistComponent},
  {path: "", component: HomeComponent},
  {path: "books/detail/:id", component: BookdetailComponent},
  {path: "books/genre/:genre", component: GenreComponent},
  {path: "books/addBook", component: AddbookComponent},
  {path: "users", component: UserslistComponent},
  {path: "like/:id", component: LikedlistComponent},
  {path: "allbooks", component: AllbooksComponent},
  {path: "allbooks/edit/:id", component: EditbookComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
