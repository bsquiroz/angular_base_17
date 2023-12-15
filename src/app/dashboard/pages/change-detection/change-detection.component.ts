import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
})
export default class ChangeDetectionComponent {
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016',
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2016',
  };

  public currentFrameWork = computed(
    () => 'Change detection - ' + this.frameworkAsSignal().name
  );

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((value) => ({ ...value, name: 'React' }));
      console.log('Hecho!');
    }, 3000);
  }
}
