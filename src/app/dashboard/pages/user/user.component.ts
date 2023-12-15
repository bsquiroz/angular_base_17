import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@app/services/users.service';
import { LoadingComponent } from '@app/shared/loading/loading.component';
import { TitleComponent } from '@app/shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent, LoadingComponent],
  templateUrl: './user.component.html',
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userServices = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userServices.getUserById(id))
    )
  );

  public fullName = computed(
    () =>
      `${this.user()!.first_name} ${this.user()!.last_name}` ??
      'Informacion del usuario'
  );
}
