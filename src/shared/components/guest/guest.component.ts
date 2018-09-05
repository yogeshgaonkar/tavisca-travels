import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';

  constructor() { }

  ngOnInit() { }
}
