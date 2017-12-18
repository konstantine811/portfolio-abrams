import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss'],
  host: {
    '[class.content-link]' : 'true',
    '[class.content-link-animation]' : 'fadeInAnimation'
  }
})
export class SocialLinkComponent implements OnInit {

  @HostBinding('attr.scroll-attr')
  // @HostBinding('class.content-link')
  public fadeInAnimation: boolean = false;
  
  constructor() { 
  }

  ngOnInit() {
    setTimeout(()=> {
      this.fadeInAnimation = true;
    }, 500);
  }

}
