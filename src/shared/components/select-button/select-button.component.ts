import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {
  @Output() ClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() buttonText = '';
  constructor() { }

  ngOnInit() { }

}
