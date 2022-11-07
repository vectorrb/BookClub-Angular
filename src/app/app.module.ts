import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { BooklistComponent } from './booklist/booklist.component';
import { HomeComponent } from './home/home.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { GenreComponent } from './genre/genre.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddbookComponent } from './addbook/addbook.component';
import { UserslistComponent } from './userslist/userslist.component';
import { LikedlistComponent } from './likedlist/likedlist.component';
import { EditbookComponent } from './editbook/editbook.component';
import { AllbooksComponent } from './allbooks/allbooks.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BooklistComponent,
    HomeComponent,
    BookdetailComponent,
    GenreComponent,
    AddbookComponent,
    UserslistComponent,
    LikedlistComponent,
    EditbookComponent,
    AllbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
