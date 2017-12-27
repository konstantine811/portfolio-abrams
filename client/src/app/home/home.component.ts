import { Component, OnInit } from '@angular/core';
import { DeviceInfoService } from '../core/services/device-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public desktop: boolean;

  public fadeInAnimation = false;
  constructor(private deviceInfo: DeviceInfoService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.fadeInAnimation = true;
    }, 500);
   this.desktop = this.deviceInfo.deviceDesktop();
  }


}
