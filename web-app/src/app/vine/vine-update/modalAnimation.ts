import { state, style, transition, trigger, animate } from '@angular/animations';
const animation = trigger('modalOpen', [
    state('open', style({
        height: '300px',
    })),
    state('close', style({
        height: 0,
    })),
    transition('open => close', [
        animate('0.5s 0 ease-out')
    ]),
    transition('close => open', [
        animate('0.5s 0 ease-in')
    ])
])

export default animation;