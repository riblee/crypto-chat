import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RoomService } from '../shared/room.service';
import { Room } from '../shared/room';

@Component({
  selector: 'rooms',
  providers: [],
  styleUrls: [ './rooms.component.css' ],
  templateUrl: './rooms.component.html'
})
export class RoomsComponent {
  constructor(private _roomService: RoomService,
              private _router: Router) {}

  get rooms() {
    return this._roomService.getRooms();
  }

  onRoomSelect(room: Room) {
    this._router.navigateByUrl('rooms/' + room.id);
  }
}
