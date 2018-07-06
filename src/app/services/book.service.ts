import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from  '../../model/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //public message: string = "Message en provencance du service";
  private urlServer: string = 'http://localhost:5000';
  private books: Book[] = [];
  
  constructor(private http: HttpClient) { }

  private round(nb: number, precision: number = 2): number {
    return parseFloat(nb.toFixed(precision));
  }

  getBook(id: number) {
    return this.http.get(this.urlServer + '/books/' + id);
  }

  getBooks() {
    // renvoie Observable, la souscription se fera côté composant
    return this.http.get(this.urlServer + '/books');
  }

  setBooks(books: Book[]): Book[] {
    this.books = books;
    return this.books;
  }


  updateBook(id: number, book: Book) {
    return this.http.put(`${this.urlServer}/books/${id}`, book);
  }
}
