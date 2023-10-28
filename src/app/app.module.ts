import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Template Driven - FormsModule
// Reactive Forms - Reactive Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { AlbumListingComponent } from './components/album-listing/album-listing.component';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AdminAddAlbumScreenComponent } from './screens/admin-add-album-screen/admin-add-album-screen.component';
import { RegisterUserScreenComponent } from './screens/register-user-screen/register-user-screen.component';
import { TextControlComponent } from './components/form/text-control/text-control.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { AuthTokenInterceptor } from './services/auth-token.interceptor';
import { HighlightDirective } from './directives/highlight.directive';
import { AlbumDetailScreenComponent } from './screens/album-detail-screen/album-detail-screen.component';
import { DurationPipe } from './pipes/duration.pipe';
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainBannerComponent,
    AlbumCardComponent,
    AlbumListingComponent,
    HomeScreenComponent,
    AdminAddAlbumScreenComponent,
    RegisterUserScreenComponent,
    TextControlComponent,
    ProfileComponent,
    HighlightDirective,
    AlbumDetailScreenComponent,
    DurationPipe,
    JoinPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'INR',
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: 'mediumDate' },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
