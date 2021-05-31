import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { FormsModule } from '@angular/forms';
import { ConfigurationComponent } from './configuration/configuration.component';
import { TeamModalComponent } from './team-modal/team-modal.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    ConfigurationComponent,
    TeamModalComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
