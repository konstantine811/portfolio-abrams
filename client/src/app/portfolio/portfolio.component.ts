import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { popupAnimation } from '../core/animations/popup.animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('popup-wrapper') popupOpen: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  popup(e) {
    e.preventDefault();
    const currentContentTxt = e.currentTarget.attributes.class.ownerElement;
    const elem = e.currentTarget.parentElement;
    const open = elem.attributes.class.ownerElement.classList.contains('opened');
    if (!open) {
      this.renderer.addClass(elem, 'opened');
      currentContentTxt.innerText = 'Back';
    } else {
      this.renderer.removeClass(elem, 'opened');
      currentContentTxt.innerText = 'About';
    }
    console.log(currentContentTxt);
  }

}
