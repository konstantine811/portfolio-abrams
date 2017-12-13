import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public color: boolean;

  constructor(private router: Router) {
      this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          switch (val.url) {
            case '/skills':
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
    
  }

  goTo(path) {
    this.router.navigate([path]);
    console.log(this.color);
  }

}
