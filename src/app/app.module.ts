import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";

import { AppRoutingModule } from './app.routing';
import { UiModule } from './shared/ui/ui.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuard } from './shared/_guards/auth.guard';
import { AuthenticationService, AlertService } from './shared/_services/index';
import { HttpClientModule, } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './shared/login/login-layout.component';
import { RolesGuard } from './shared/_guards/role-guard';
import { LandingPageComponent } from "./shared/landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    LoginLayoutComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ClarityModule.forRoot(),
    UiModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    RolesGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
