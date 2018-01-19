import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";

import { AppRoutingModule } from './app.routing';
//import { AdminPageModule } from './pages/admin-page/admin-page.module';
//import { StudentPageModule } from './pages/student-page/student-page.module';
import { UiModule } from './shared/ui/ui.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    UiModule,
    //AdminPageModule,
    //StudentPageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
