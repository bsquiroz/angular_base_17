import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-view-transitions',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transitions 2" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/300/400"
        alt="picsum"
        width="300"
        height="400"
        style="view-transition-name: hero1"
      />

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTransitions2Component {}
