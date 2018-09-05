import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
  @Input() cardData = null;
  showCardDetails: boolean;
  constructor() { }

  ngOnInit() {
    const data = this.cardData.split(':');
    this.cardData = {
      'name': data[0],
      'price': data[1],
      'address': data[2]
    };
  }

  cardDetails(flag) {
    console.log('enter in open card', flag);
    if (flag === 'open') {
      this.showCardDetails = true;
    } else {
      this.showCardDetails = false;
    }
  }

}
