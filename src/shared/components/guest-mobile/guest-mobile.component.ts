import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-guest-desktop',
  templateUrl: './guest-desktop.component.html',
  styleUrls: ['./guest-desktop.component.scss']
})
export class GuestMobileComponent implements OnInit {
    rooms : Array<object> = [
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
        },
        {
          roomName: 'Room 2',
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

  constructor() {
  }

  addRoom() {
      this.rooms.push({
        roomName: 'Room ${this.rooms.length + 1}',
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
      })
  }

  ngOnInit() { }

  clearClicked() { }

  applyClicked() { }
}
