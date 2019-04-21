import { trigger, transition, keyframes, animation,  animate, state, style, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimations = animation(
    animate('500ms ease-out', keyframes([  // can use cubic-bezier for animation
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
    })
     ]))
)

export let slide = trigger('slide', [
   transition(':enter', [
       style({ transform: 'translateX(-10px)' }),
       animate(500)
   ]),

   transition(':leave',
    useAnimation(bounceOutLeftAnimations)
   )
]);

export let fadeInAnimation = animation([
    style({  opacity: 0 }), animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let fadeOutAnimation = animation([
    style({ opacity: 0 }), animate(1000)
]);

export let fade = trigger('fade', [

    // transition('void => *', [       // void stat to default state.
    //   // animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
    //   // because angular knows that it automatically moves to the default state.
    //   animate(2000)
    // ]),
    // transition('* => void', [
    //   animate(5000)
    // ])

    // if we have multiple transitions with same implementation then use double-sided arrow
    transition(':enter',
        useAnimation(fadeInAnimation)
    ),

    transition(':leave',
    useAnimation(fadeInAnimation)
    )
  ])
