import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h1
    [class]="
      withShadow
        ? 'shadow mb-5 shadow-blue-200 p-5 text-3xl font-bold'
        : 'mb-5 p-5 text-3xl font-bold'
    "
  >
    {{ title }} - {{ withShadow }}
  </h1>`,
})
export class TitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
