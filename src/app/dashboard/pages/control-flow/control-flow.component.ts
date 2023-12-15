import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

type Grade = 'A' | 'B' | 'C';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('C');
  public frameworks = signal([
    'angular',
    'astro',
    'vue',
    'next',
    'react',
    'svelte',
  ]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
