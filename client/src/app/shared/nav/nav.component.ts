import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public color: boolean;
  public animate: boolean;
  public opacity: boolean;

  constructor(private router: Router) {
      this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          switch (val.url) {
            case '/skills':
              this.color = true;
              this.animate = false;
              this.opacity = false;
              break;
            case '/portfolio':
              this.color = true;
              this.animate = false;
              this.opacity = false;
              break;
            case '/home':
              this.color = false;
              this.opacity = true;
              setTimeout(() => {
                this.animate = true;
              }, 3300);
              break;
          }
        }
        
    });
   }

  ngOnInit() {
    
  }

  goTo(path) {
    this.router.navigate([path]);
  }

}
