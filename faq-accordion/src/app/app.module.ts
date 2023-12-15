import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardTabComponent } from './card-container/card-tab/card-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    CardTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
