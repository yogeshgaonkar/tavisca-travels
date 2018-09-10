import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() count: number;
  @Output() countChange: EventEmitter<number>;

  ngOnInit() {}

  constructor() {
    this.count = 0;
    this.countChange = new EventEmitter<number>();
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.countChange.emit(this.count);
    }
  }
}
