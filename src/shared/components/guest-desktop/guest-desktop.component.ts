import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-guest-desktop',
  templateUrl: './guest-desktop.component.html',
  styleUrls: ['./guest-desktop.component.scss']
})
export class GuestDesktopComponent implements OnInit {
  @Input() hideActions: boolean;
  @Output() clearValues = new EventEmitter<any>();
  @Output() apply = new EventEmitter<any>();

  constructor() { 
    this.hideActions = false;
  }

  ngOnInit() { }

  clearClicked() {
    this.clearValues.emit(null);
  }

  applyClicked() {
    this.apply.emit(null);
  }
}
