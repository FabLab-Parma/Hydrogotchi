import { Component } from '@angular/core';
// import {
//   AngularFireList,
//   AngularFireDatabase,
// } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.less',
})
export class HomepageComponent {
  //constructor(private database: AngularFireDatabase) {}
  constructor() {}

  // getLatestPost(): Observable<any> {
  //   return this.database
  //     .list('posts', (ref) => ref.limitToLast(1))
  //     .valueChanges();
  // }
}
