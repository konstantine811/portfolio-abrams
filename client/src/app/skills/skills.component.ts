import { Component, OnInit } from '@angular/core';
import { DeviceInfoService } from '../core/services/device-info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private device: boolean;

  constructor(private deviceInfo: DeviceInfoService) {
   }

  ngOnInit() {
    this.device = this.deviceInfo.deviceDesktop();
  }

}
