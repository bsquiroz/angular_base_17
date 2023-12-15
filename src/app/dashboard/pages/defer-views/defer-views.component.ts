import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@app/shared/heavy-loaders/heavy-loaders-slow.component';
import { LoadingComponent } from '@app/shared/loading/loading.component';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoadersSlowComponent,
    TitleComponent,
    LoadingComponent,
  ],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {
  public dataComponents = [
    {
      name: 'component heavy 1',
      cssStyles: 'bg-red-500',
    },
    {
      name: 'component heavy 2',
      cssStyles: 'bg-blue-600',
    },
  ];
}
