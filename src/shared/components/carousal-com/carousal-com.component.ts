import { Component, OnInit } from '@angular/core';
import {UiUtilsService} from '../../helpers/ui-utils.service';
@Component({
  selector: 'app-carousal-com',
  templateUrl: './carousal-com.component.html',
  styleUrls: ['./carousal-com.component.scss'],
  providers: [UiUtilsService]
})

export class CarousalComComponent implements OnInit {
  hotels: Array<Object>;
  currenthotels: Array<Object>;
  carosalListWidth = 500;
  startIndex = 0;
  maxSpliceCount = 3;
  spliceCount = this.maxSpliceCount;
  showCarosalList: boolean;
  constructor(private uiUtils: UiUtilsService) { }


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
    this.showCarosalList = true;
    this.resizeTheCarosal(this.uiUtils.getDeviceCategory());
    this.uiUtils.getWindowResize().subscribe({
      next: (data) => {
        console.log(data);
        this.resizeTheCarosal(data.deviceType);
      }
    });

  }

  resizeTheCarosal(deviceType) {

    if (deviceType === 'md' ) {
      this.maxSpliceCount = 2;
      this.spliceCount = 2;
    }
    if (deviceType === 'sm' || deviceType === 'xs' ) {
      this.maxSpliceCount = 1;
      this.spliceCount = 1;
    }
    this.setCurrentHotels();
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
    if ( ( this.startIndex + this.maxSpliceCount ) > this.hotels.length) {
      this.spliceCount = this.hotels.length - ( this.startIndex + this.maxSpliceCount );
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
        this.spliceCount = this.maxSpliceCount ;
      }
      this.setCurrentHotels();
    }

  }
}
