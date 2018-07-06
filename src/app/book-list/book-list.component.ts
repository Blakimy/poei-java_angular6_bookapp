import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  editMode: boolean = false;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe((res: Books[]) => {
        this.books = res;
        this.bookService.setBooks(res);
      });
  }

}
