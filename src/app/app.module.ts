import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";

import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';

import { AppRoutingModule } from './app.routing';
import { UiModule } from './shared/ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    StudentPageComponent
    
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    UiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
