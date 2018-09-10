import { Component, OnInit } from '@angular/core';
import {UiUtilsService} from '../shared/helpers/ui-utils.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tavisca-travels';
  constructor(  private uiUtils: UiUtilsService, private router: Router ) { }

  ngOnInit() {
  this.resizePage(this.uiUtils.getDeviceCategory());
  this.uiUtils.getWindowResize().subscribe({
    next: (data) => {
      this.resizePage(data.deviceType);
    }
  });
  }

  resizePage(deviceType) {
   if (deviceType === 'sm' || deviceType === 'xs' ) {
    this.router.navigateByUrl('/mobile-home');
    }
  }
}
