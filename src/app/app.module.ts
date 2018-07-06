import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// composants
import { AppComponent } from './app.component';
import { BoookComponent } from './book/book.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';

// services
import { BookService } from './services/book.service';
import { MenuComponent } from './menu/menu.component';
// import { DetaLilStudentComponent } from './detail-student/detail-student.component';
// import { AddStudentFormComponent } from './add-student-form/add-student-form.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
