import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { DeviceInfoService } from '../../core/services/device-info.service';


@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[class.content-link]' : 'true',
    '[class.content-link-animation]' : 'fadeInAnimation'
  }
})
export class SocialLinkComponent implements OnInit {

  private device: boolean;

  @HostBinding('attr.scroll-attr')
  // @HostBinding('class.content-link')
  public fadeInAnimation = false;

  constructor(private deviceInfo: DeviceInfoService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.fadeInAnimation = true;
    }, 500);
    this.device = this.deviceInfo.deviceDesktop();
  }

}
