import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'test', component: FirebaseTestComponent },
  { path: '**', component: NotfoundComponent },
];
