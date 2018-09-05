import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-desktop',
  templateUrl: './guest-desktop.component.html',
  styleUrls: ['./guest-desktop.component.scss']
})
export class GuestDesktopComponent implements OnInit {
  guests: Array<Object> = [
      { title: 'Adults', total: 0, subTitle: '' },
      { title: 'Children', total: 0, subTitle: '(Up to 14 years)' },
      { title: 'Infants', total: 0, subTitle: '(Under 2 years)'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
