import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AdminAddAlbumScreenComponent } from './screens/admin-add-album-screen/admin-add-album-screen.component';
import { RegisterUserScreenComponent } from './screens/register-user-screen/register-user-screen.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { AlbumDetailScreenComponent } from './screens/album-detail-screen/album-detail-screen.component';
import { LoginUserScreenComponent } from './screens/login-user-screen/login-user-screen.component';

const routes: Routes = [
  {
    // /
    path: '',
    component: HomeScreenComponent,
  },

  {
    // /album/:id
    path: 'album/:id',
    component: AlbumDetailScreenComponent,
  },

  {
    // /admin/add-album
    path: 'admin/add-album',
    component: AdminAddAlbumScreenComponent,
  },
  {
    path: 'user/register',
    component: RegisterUserScreenComponent,
  },
  {
    path: 'user/login',
    component: LoginUserScreenComponent,
  },
  {
    path: 'user/profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
