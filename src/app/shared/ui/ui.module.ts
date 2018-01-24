import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppLayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from '../_services/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule
  ],
  declarations: [
    AppLayoutComponent, 
    HeaderComponent, 
    SidebarComponent, 
    MainComponent,
    AlertComponent
  ],
  exports: [
    AppLayoutComponent
  ],
  providers: [
    AlertService
  ]
})
export class UiModule { }
