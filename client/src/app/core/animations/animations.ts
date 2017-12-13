import { trigger, state, style, animate, transition, query, stagger, group, keyframes } from '@angular/animations';

export function Animations() {
    return dropDown();
}

function dropDown() {
    return trigger('dropDownAnim', [
        state('true', style({opacity: 1, transform: 'translateX(0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateY(-60%)'
          }),
          animate('0.3s ease-in')
        ]),
        transition('* => void', [
          animate('0.4s ease-out', style({
            opacity: 0,
            transform: 'translateY(-60%)'
          }))
        ])
      ])
}