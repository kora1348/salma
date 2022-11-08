import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { SessionState } from './store/session/session.state';
import { CanActivateTeam } from './core/canActivateTeam.guard';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { IsActivate } from './core/isActivate.guard';

import { IdentityModule } from './views/identity/identity.module';
import { AppHttpInterceptor } from './core/interceptor/app-http.interceptor';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdentityModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([SessionState], {
      developmentMode: true
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'session'
    }),

  ],
  providers: [
    CanActivateTeam,
    IsActivate,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

