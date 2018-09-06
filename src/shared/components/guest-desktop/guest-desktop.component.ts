import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-guest-desktop',
  templateUrl: './guest-desktop.component.html',
  styleUrls: ['./guest-desktop.component.scss']
})
export class GuestDesktopComponent implements OnInit {
  @Output() clearValues = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  clearClicked() {
    this.clearValues.emit(null);
  }
}
