import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { RoomsComponent } from './room';
import { RoomDetailComponent } from './room/room-detail';
import { ConnectComponent } from './room/connect/connect.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/connect', component: ConnectComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },
  { path: '**', component: NoContentComponent },
];
