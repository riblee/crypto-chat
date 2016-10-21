import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Room } from './room';
import { Message } from './message';
import { InstanceBuilder } from './helpers';

declare var io: any;

@Injectable()
export class RoomService {
  private _rooms: Room[];
  private _socket;

  constructor() {
    this._rooms = [];
    this._rooms.push(InstanceBuilder.build(Room, {
      id: 'aaa',
      name: 'Sample room',
      messages: InstanceBuilder.buildArray(Message, [
        {decryptedText: 'Sample message', nickname: 'Alice', date: new Date('Fri Oct 21 2016 20:59:17 GMT+0200 (CEST)')},
        {decryptedText: 'Sample message 2', nickname: 'Bob', date: new Date()}
      ]),
      newMessageCount: 0,
      hasNewMessage: false
    }));
    this._rooms.push(InstanceBuilder.build(Room, {
      id: 'bbb',
      name: 'Sample room 2',
      messages: InstanceBuilder.buildArray(Message, [
        {decryptedText: 'Sample message 3', nickname: 'Bob', date: new Date('Fri Oct 20 2016 20:59:17 GMT+0200 (CEST)')},
        {decryptedText: 'Sample message 4', nickname: 'Bob', date: new Date('Fri Oct 21 2016 10:59:17 GMT+0200 (CEST)')},
        {decryptedText: 'Sample message 5', nickname: 'Bob', date: new Date('Fri Oct 21 2016 10:59:17 GMT+0200 (CEST)')},
        {decryptedText: 'Sample message 6', nickname: 'Alice', date: new Date()},
        {decryptedText: 'Sample message 7', nickname: 'Alice', date: new Date()}
      ]),
      newMessageCount: 2,
      hasNewMessage: true
    }));
    // this._socket = io('http://localhost:3001');
    // this._socket.on('message', this.handleMessage);
  }

  private handleMessage(_message: any) {
    // TODO: decrypt message
    let message: Message = InstanceBuilder.build(Message, _message);
    let room = this.getRoom(message.roomId);
    room.messages.push(message);

    // Only vibrate when the sender is not the user
    if ( message.nickname !== room.self.nickName ) {
      window.navigator.vibrate(200);
    }
  }

  getRooms() {
    return this._rooms;
  }

  getRoom(id: string) {
    //noinspection TypeScriptUnresolvedFunction
    return _.find(this._rooms, ['_id', id]);
  }

  get rooms(): Room[] {
    return this._rooms;
  }
}
