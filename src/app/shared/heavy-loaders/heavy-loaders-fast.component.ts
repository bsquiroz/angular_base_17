import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: ` <section
    [ngClass]="[
      'w-full flex justify-center items-center rounded-md font-bold',
      cssStyles
    ]"
  >
    <ng-content />
  </section>`,
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssStyles!: string;
}
