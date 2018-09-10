import { Component, OnInit, EventEmitter, Output, Input, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface GuestMobileData {
  rooms: Array<object>;
}

@Component({
  selector: 'app-guest-mobile',
  templateUrl: './guest-mobile.component.html',
  styleUrls: ['./guest-mobile.component.scss']
})
export class GuestMobileComponent implements OnInit {
  rooms: Array<object> = [
    {
      roomName: 'Room 1',
      guests: [
        {
            type: 'Adults',
            total: 0
        },
        {
          type: 'Children',
          total: 0
        }
      ]
    }
  ];

  constructor(public dialogRef: MatDialogRef<GuestMobileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GuestMobileData) {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addRoom() {
      const roomNo =  this.rooms.length + 1;
      this.rooms.push({
        roomName: `Room ${roomNo}`,
        guests: [
            {
                type: 'Adults',
                total: 0
            },
            {
                type: 'Children',
                total: 0
            }
        ]
      });
  }

  ngOnInit() { }

  onDecrementCounter(guest) {
    if (guest.total > 0) {
      guest.total--;
    }
  }

  onIncrementCounter(guest) {
    guest.total++;
  }
}
