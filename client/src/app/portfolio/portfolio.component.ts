import { Component, OnInit } from '@angular/core';
import { DeviceInfoService } from '../core/services/device-info.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  private device: boolean;

  constructor(private deviceInfo: DeviceInfoService) { }

  ngOnInit() {
    this.device = this.deviceInfo.deviceDesktop();
  }

}
