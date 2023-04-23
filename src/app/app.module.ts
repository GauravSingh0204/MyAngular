import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnlyHtmlComponent } from './headder/only-html.component';
import { SuperTaskbarComponent } from './super-taskbar/super-taskbar.component';
import { Header20Component } from './header2/header2.0.component';

@NgModule({
  declarations: [
    AppComponent,
    // OnlyHtmlComponent,
    SuperTaskbarComponent,
    Header20Component,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
