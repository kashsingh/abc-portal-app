import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";

import { AppRoutingModule } from './app.routing';
//import { AdminPageModule } from './pages/admin-page/admin-page.module';
//import { StudentPageModule } from './pages/student-page/student-page.module';
import { UiModule } from './shared/ui/ui.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuard } from './shared/_guards/auth.guard';
import { AuthenticationService } from './shared/_services/index';
import { JwtInterceptor } from './shared/_guards/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './shared/login/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    UiModule,
    FormsModule,
    HttpClientModule,
    //AdminPageModule,
    //StudentPageModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
