import { Component, Injector } from '@angular/core';
import { FirebaseApp, FirebaseServerApp } from '@angular/fire/app';
import { getDatabase } from 'firebase/database';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-firebase-test',
  standalone: true,
  imports: [],
  templateUrl: './firebase-test.component.html',
  styleUrl: './firebase-test.component.less',
})
export class FirebaseTestComponent {
  constructor(private injector: Injector, private service: FirebaseService) {}
  ngOnInit() {
    console.log('call getDataFromDb');
    this.service
      .getDataFromDb('test')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error reading data:', error);
      });
  }
}
