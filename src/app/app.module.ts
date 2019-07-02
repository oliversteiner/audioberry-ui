import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons/faBluetoothB';
import { MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControllsComponent } from './controlls/controlls.component';
import { UiButton} from './_models/uiButton';

@NgModule({
  declarations: [AppComponent, ControllsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [UiButton],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faBluetoothB);
  }
}
