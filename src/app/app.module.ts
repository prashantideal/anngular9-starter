import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AnonymousUserLayoutComponent } from './common/anonymous-user-layout/anonymous-user-layout.component';
import { LoginModule } from './login/login.module';
import { AuthorizedUserLayoutComponent } from './common/authorized-user-layout/authorized-user-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthRequestInterceptor } from './common/auth-request.interceptor';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    AnonymousUserLayoutComponent,
    AuthorizedUserLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    LoginModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MainModule
  ],
  exports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    LoginModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MainModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthRequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
