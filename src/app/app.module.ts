import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessAllertComponent } from './success-allert/success-allert.component';
import { WarningAllertComponent } from './warning-allert/warning-allert.component';
import { UsernameAssey2Component } from './username-assey2/username-assey2.component';
import { DirectivesAssey3Component } from './directives-assey3/directives-assey3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAllertComponent,
    WarningAllertComponent,
    UsernameAssey2Component,
    DirectivesAssey3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
