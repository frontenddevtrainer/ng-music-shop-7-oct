import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  effect,
} from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription, map } from 'rxjs';

@Directive({
  selector: '[permission]',
})
export class PermissionDirective {
  constructor(
    private _user: UserService,
    private _tref: TemplateRef<any>,
    private _vc: ViewContainerRef
  ) {
    effect(() => {
      const user = this._user.user();

      if (!user) {
        this.update(false);
      } else {
        const isAllowed = this.getPermissionValue(
          user.permissions,
          this.permissionPath
        );
        this.update(isAllowed);
      }
    });
  }

  private permissionPath!: string;

  @Input() set permission(permission: string) {
    this.permissionPath = permission;
  }

  private getPermissionValue(user: any, path: string) {
    return path.split('.').reduce((acc, part) => acc && acc[part], user);
  }

  update(show: boolean) {
    if (show) {
      this._vc.createEmbeddedView(this._tref);
    } else {
      this._vc.clear();
    }
  }
}
