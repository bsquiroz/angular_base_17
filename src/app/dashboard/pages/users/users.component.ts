import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@app/services/users.service';
import { LoadingComponent } from '@app/shared/loading/loading.component';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    TitleComponent,
    RouterModule,
    LoadingComponent,
  ],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  public usersServices = inject(UsersService);
}
