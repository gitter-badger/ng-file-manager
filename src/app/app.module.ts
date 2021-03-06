import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgfmModule } from './ngfm/ngfm.module';
import { PrivateRouteService } from './services/private-route.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgfmMemoryConnector } from './ngfm/connectors/ngfm-memory-connector';
import { NGFM_CONNECTOR } from './ngfm/connectors/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgfmModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    PrivateRouteService,
    { provide: NGFM_CONNECTOR, useClass: NgfmMemoryConnector }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
