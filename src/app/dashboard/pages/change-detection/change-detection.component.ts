import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule],
  template: './chage-detection.component.html',
})
export class ChangeDetectionComponent {}
