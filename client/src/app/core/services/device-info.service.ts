import { Injectable } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';

@Injectable()
export class DeviceInfoService {


  constructor(private deviceService: Ng2DeviceService) {
   }

  deviceDesktop(): boolean {
    return this.deviceService.isDesktop();
  }

}
