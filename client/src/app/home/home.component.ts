import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public fadeInAnimation = false;
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.fadeInAnimation = true;
    }, 500);
  }


}
