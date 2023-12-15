import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<section
    [ngClass]="['h-96 flex justify-center items-center', cssStyles]"
  >
    <h1>
      Contenido del <strong>{{ title }}</strong>
    </h1>
  </section>`,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssStyles = '';
  @Input({ required: true }) title = '';

  constructor() {
    const start = Date.now();

    while (Date.now() - start < 2000) {}
  }
}
