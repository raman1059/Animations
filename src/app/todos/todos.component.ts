import { Component } from '@angular/core';
import { fade, bounceOutLeftAnimations, fadeInAnimation } from './../animations';
import { trigger, transition, keyframes, animate, style, useAnimation, query, animateChild, group, stagger } from '@angular/animations';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translatey(-20px)' }),
            animate(700)
          ]),
          query('@todoAnimation', stagger(200, animateChild()))
        ])
      ])
    ]),
    trigger('todoAnimation', [
      transition(':enter', [
       useAnimation(fadeInAnimation, {
         params: {
           duration: '1000ms'
         }
       })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimations)
      ])

    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    // tslint:disable-next-line:prefer-const
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
  animationStarted($event) { console.log($event); }
  animationDone($event) { console.log($event); }

}
