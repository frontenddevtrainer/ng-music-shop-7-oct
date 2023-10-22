import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AdminAddAlbumScreenComponent } from './screens/admin-add-album-screen/admin-add-album-screen.component';
import { RegisterUserScreenComponent } from './screens/register-user-screen/register-user-screen.component';
import { ProfileComponent } from './screens/profile/profile.component';

const routes: Routes = [
  {
    // /
    path: '',
    component: HomeScreenComponent,
  },
  {
    // /admin/add-album
    path: 'admin/add-album',
    component: AdminAddAlbumScreenComponent,
  },
  {
    path: 'user/register',
    component : RegisterUserScreenComponent
  },
  {
    path: "user/profile",
    component: ProfileComponent
  }
  // Login
  // {
  //   path: 'user/register',
  //   component : RegisterUserScreenComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
