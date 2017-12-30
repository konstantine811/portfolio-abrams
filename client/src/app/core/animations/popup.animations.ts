import {trigger, state, animate, style, transition } from '@angular/core';

export function popupAnimation() {
    return popupAnim();
}


function popupAnim() {
    return trigger('flyInOut', [
        state('in', style({transform: 'translateX(-100%)', opacity: '0'})),
        transition('void => *', [
          style({transform: 'translateX(-100%)',  opacity: '1'}),
          animate('0.3s cubic-bezier(0.4, 1, 1, 1)')
        ]),
        transition('* => void', [
          animate('0.35s cubic-bezier(0.4, 0, 0.2, 1)', style({transform: 'translateX(-100%)',  opacity: '0'}))
        ])
      ]);
  }