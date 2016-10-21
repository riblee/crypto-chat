import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RoomService } from '../../shared/room.service';
import { Room } from '../../shared/room';

@Component({
  selector: 'room-detail',
  providers: [],
  styleUrls: [ './room-detail.component.css' ],
  templateUrl: './room-detail.component.html'
})
export class RoomDetailComponent {
  private _room: Room;

  constructor(private _route: ActivatedRoute,
              private _roomService: RoomService,
              private _router: Router) {
    let id = this._route.snapshot.params['id'];
    this._room = this._roomService.getRoom(id);
    this._room.hasNewMessage = false;
  }

  get room() {
    return this._room;
  }

  back() {
    this._router.navigateByUrl('rooms');
  }
}
