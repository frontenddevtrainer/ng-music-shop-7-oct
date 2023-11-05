import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
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
  ) {}

  private permissionPath!: string;
  private subscription!: Subscription;

  @Input() set permission(permission: string) {
    this.permissionPath = permission;
    this.subscription = this._user.user$
      .pipe(
        map((user: any) => {
          if (!user) {
            return false;
          }
          const isAllowed = this.getPermissionValue(
            user.permissions,
            this.permissionPath
          );
          return isAllowed;
        })
      )
      .subscribe((isAllowed) => {
        this.update(isAllowed);
      });
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
