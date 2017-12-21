import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {
  public color: boolean;
  public animate: boolean;
  public opacity: boolean = true;

  constructor(private router: Router) {
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
    
  }
  ngAfterViewInit() {

  }

  goTo(path) {
    this.router.navigate([path]);
  }

}
