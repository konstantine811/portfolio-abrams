import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DeviceInfoService } from '../../core/services/device-info.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public color: boolean;
  public animate: boolean;
  public opacity = true;
  public desktop: boolean;

  constructor(private router: Router, private deviceInfo: DeviceInfoService) {
      this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          switch (val.url) {
            case '/skills':
              this.color = true;
              break;
            case '/portfolio':
              this.color = true;
              break;
            case '/home':
              this.color = false;
              break;
          }
        }
    });
   }

  ngOnInit() {
    this.opacity = true;
    setTimeout(() => {
      this.animate = true;
    }, 3300);
    this.desktop = this.deviceInfo.deviceDesktop();
  }

  goTo(path) {
    this.router.navigate([path]);
  }

}
