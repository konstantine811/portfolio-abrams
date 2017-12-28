import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DeviceInfoService } from '../../core/services/device-info.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private colorNav: boolean;
  public animate: boolean;
  public opacity = true;
  public desktop: boolean;

  constructor(private deviceInfo: DeviceInfoService, private router: Router) { }

  ngOnInit() {
    this.opacity = true;
    setTimeout(() => {
      this.animate = true;
    }, 3300);
    this.desktop = this.deviceInfo.deviceDesktop();
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        switch (val.url) {
          case '/skills':
            this.colorNav = true;
            break;
          case '/portfolio':
            this.colorNav = true;
            break;
          case '/home':
            this.colorNav = false;
            break;
        }
      }
    });
    if (this.router.url === '/home') {
      this.colorNav = false;
    } else {
      this.colorNav = true;
    }
  }

  goTo(path) {
    this.router.navigate([path]);
  }
}
