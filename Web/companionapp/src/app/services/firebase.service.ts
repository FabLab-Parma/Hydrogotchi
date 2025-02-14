import { Inject, Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { Database, getDatabase, onValue, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private database: Database;

  constructor(@Inject(FirebaseApp) app: FirebaseApp) {
    this.database = getDatabase(app);
  }

  getDataFromDb(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const testCollectionRef = ref(this.database, 'test');
      onValue(
        testCollectionRef,
        (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          return data;
        },
        (error) => {
          console.error('Error reading data:', error);
        }
      );
    });
  }
}
