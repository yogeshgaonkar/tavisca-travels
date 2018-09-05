import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal-com',
  templateUrl: './carousal-com.component.html',
  styleUrls: ['./carousal-com.component.scss']
})

export class CarousalComComponent implements OnInit {
  hotels: Array<Object>;
  currenthotels: Array<Object>;
  carosalListWidth = 500;
  startIndex = 0;
  spliceCount = 3;
  showCarosalList: boolean;
  constructor() { }
  ngOnInit() {
    this.hotels = [
      {
        name: 'Taj',
        price: 2234
      },
      {
        name: 'Westin',
        price: 2234
      },
      {
        name: 'Novetal',
        price: 2234
      },
      {
        name: 'Hyyat',
        price: 2234
      },
      {
        name: 'Ginger',
        price: 2234
      }
    ];
    this.setCurrentHotels();
    this.showCarosalList = true;

  }

  setCurrentHotels() {
    const tempHotels = Object.create(this.hotels);
    this.currenthotels = tempHotels.splice(this.startIndex, this.spliceCount);
    this.showCarosalList = false;
    setTimeout(() => {
      this.showCarosalList = true;
    },
    200);
  }

  nextHotels() {
    this.startIndex++;
    if ( ( this.startIndex + 3 ) > this.hotels.length) {
      this.spliceCount = this.hotels.length - ( this.startIndex + 3 );
      if (this.spliceCount <= 0) {
        this.spliceCount = 0;
        this.startIndex--;
        return;
      }
      this.setCurrentHotels();
    } else {
      this.setCurrentHotels();
    }
  }

  prevHotels() {
    if (this.startIndex > 0) {
      this.startIndex--;
      if ( ( this.spliceCount + this.startIndex ) > this.hotels.length) {
        this.spliceCount = this.hotels.length - ( this.startIndex + this.spliceCount );
      } else {
        this.spliceCount = 3 ;
      }
      this.setCurrentHotels();
    }

  }
}
