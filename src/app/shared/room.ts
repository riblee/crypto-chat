import { Message } from './message';
import { User } from './user';

export class Room {
  private _id: string;
  private _name: string;
  private _messages: Message[];
  private _hasNewMessage: boolean;
  private _self: User;
  private _owner: User;
  private _users: User[];
  private _newMessageCount: number;

  constructor() {}

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get messages(): Message[] {
    return this._messages;
  }

  set messages(value: Message[]) {
    this._messages = value;
  }

  get hasNewMessage(): boolean {
    return this._hasNewMessage;
  }

  set hasNewMessage(value: boolean) {
    if (!value) {
      this._newMessageCount = 0;
    }
    this._hasNewMessage = value;
  }

  get self(): User {
    return this._self;
  }

  set self(value: User) {
    this._self = value;
  }

  get owner(): User {
    return this._owner;
  }

  set owner(value: User) {
    this._owner = value;
  }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  get newMessageCount(): number {
    return this._newMessageCount;
  }

  set newMessageCount(value: number) {
    this._newMessageCount = value;
  }
}
