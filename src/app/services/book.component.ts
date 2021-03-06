import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import d'opérateurs propres à la version 6 de Rxjs
import { take, filter, map, tap, mergeMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  //private http: HttpClient;

  images: any[] = [];

  @Input('data') book = {
    id: 0,
    name: '',
    authors: '',
  };

  @Input() editMode: boolean = false;

  // la propriété changeNode reçoit un objet de type EventEmitter
  @Output() changeEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    //this.http = new HttpClient;
    // Injection dépendance
    // un objet de type HttpCLient est crée dès l'instanciation
    // de la classe StudentComponent
    // StudentComponent dispose d'une propriété http
    // lui permettant de faire des requêtes ajax
  }

  ngOnInit() {
  }

  // changeNote(studentId: number, indexNote: number) {
  //   console.log('studentId: ' + studentId + ', indexNote: ' + indexNote);
  //
  //   //this.student.notes[indexNote] =
  //
  //   // notification à destination du parent
  //   this.changeEmitter.emit(null);
  // }



  // testAjax() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/photos')
  //     .pipe(
  //       delay(500), // pause de 0.5 seconde
  //       mergeMap(data => data),
  //       //take(3),
  //       filter(el => el.id > 3999 && el.id < 4021),
  //       map(el => {
  //         return {id: el.id, src: el.thumbnailUrl, alt: 'image_' + el.id};
  //       }),
  //       tap(() => {
  //         // cet opérateur n'agit pas sur la valeur du flux (stream)
  //         //console.log('tap => side effect')
  //       })
  //     )
  //     .subscribe(res => {
  //       console.log(res);
  //       // filtrage en utilisant la méthode .filter native
  //       // des tableaux javascript
  //       //this.images = res.filter(x => x.id < 21);
  //       //console.log(this.images);
  //       this.images.push(res); // on ajoute au tableau les réponses
  //     });
  // }

}
