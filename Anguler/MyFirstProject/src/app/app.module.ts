import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { SampleTut1Component } from './sample-tut1/sample-tut1.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonClickComponent,
    SampleTut1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
