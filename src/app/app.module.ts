import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons/faBluetoothB';
import { MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlsComponent } from './controls/controls.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import {PythonService} from './_services/python.service';

const socketURL = 'http://' + environment.url + ':8882';

const config: SocketIoConfig = { url: socketURL, options: {} };

@NgModule({
  declarations: [AppComponent, ControlsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSliderModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [PythonService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faBluetoothB);
  }
}
