import { Component, OnInit, HostBinding, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[class.content-link]' : 'true'
  }
})
export class SocialLinkComponent implements OnInit {

  @HostBinding('attr.scroll-attr')
  // @HostBinding('class.content-link')
  public fadeInAnimation = false;

  constructor(private host: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
      this.renderer.setStyle(this.host.nativeElement, 'animation', 'content-link-black 3.5s 1 forwards cubic-bezier(0.4, 0, 0.2, 1)');
  }

}
