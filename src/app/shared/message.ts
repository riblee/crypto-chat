export class Message {
  private _isServer: boolean;
  private _decryptedText: string;
  private _encryptedText: string;
  private _nickname: string;
  private _roomId: string;
  private _date: Date;

  constructor(isServer?: boolean,
              decryptedText?: string,
              encryptedText?: string,
              nickname?: string,
              roomId?: string,
              date?: Date) {
    this._isServer = isServer;
    this._decryptedText = decryptedText;
    this._encryptedText = encryptedText;
    this._nickname = nickname;
    this._roomId = roomId;
    this._date = date;
  }

  get isServer(): boolean {
    return this._isServer;
  }

  set isServer(value: boolean) {
    this._isServer = value;
  }

  get decryptedText(): string {
    return this._decryptedText;
  }

  set decryptedText(value: string) {
    this._decryptedText = value;
  }

  get encryptedText(): string {
    return this._encryptedText;
  }

  set encryptedText(value: string) {
    this._encryptedText = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get roomId(): string {
    return this._roomId;
  }

  set roomId(value: string) {
    this._roomId = value;
  }

  get isDecrypted() {
    return !!this._decryptedText;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

}
