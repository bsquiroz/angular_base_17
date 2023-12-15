import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h1
    [class]="
      'mb-5 p-5 text-3xl font-bold ' + (withShadow && 'shadow shadow-blue-200 ')
    "
  >
    {{ title }}
  </h1>`,
})
export class TitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
