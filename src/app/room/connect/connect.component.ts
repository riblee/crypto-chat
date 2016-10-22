import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RoomService } from '../../shared/room.service';

declare let Materialize: any;

@Component({
  selector: 'connect',
  providers: [],
  styleUrls: [ './connect.component.css' ],
  templateUrl: './connect.component.html'
})
export class ConnectComponent implements OnInit {
  private token: FormControl;
  private password: FormControl;
  private connectForm: FormGroup;
  constructor(private _roomService: RoomService,
              private _router: Router,
              private _formBuilder: FormBuilder,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    let token = this._route.snapshot.queryParams['token'] || '';

    this.token = new FormControl(token, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);

    this.connectForm = this._formBuilder.group({
      token: this.token,
      password: this.password
    });
  }

  ngAfterViewChecked() {
    Materialize.updateTextFields();
  }

  get rooms() {
    return this._roomService.getRooms();
  }

  onConnect() {
    // this._router.navigateByUrl('rooms/' + room.id);
    if (!this.connectForm.invalid) {
      let formValue: any = this.connectForm.getRawValue();
      // console.log(formValue);
    }
  }

  back() {
    this._router.navigateByUrl('rooms');
  }
}
