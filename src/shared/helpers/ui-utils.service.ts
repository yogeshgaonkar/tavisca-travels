import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiUtilsService {

  constructor() { }

  getDeviceCategory() {
    if (window.innerWidth < 768) {
     return 'xs';
    } else if (window.innerWidth < 991) {
     return 'sm';
    } else if (window.innerWidth < 1199) {
     return 'md';
    } else {
     return 'lg';
    }
  }
  getWindowResize() {
    const observable = new Observable.create((observer) => {
      window.addEventListener('resize', () => {
        observer.next({
          width: window.innerWidth,
          height: window.innerHeight,
          deviceType: this.getDeviceCategory()
        });
      });
    });
    return observable;
  }
}
