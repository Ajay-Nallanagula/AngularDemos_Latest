import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './event-thumbnail.component';
import { DemoAttrDirective } from './demoattr.directive';

@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    DemoAttrDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
