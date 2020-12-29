import { AppConfig } from './app.config';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { InterceptorModule } from './interceptor.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    InterceptorModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `${AppConfig.BASE_URL}/logs`,
      level: NgxLoggerLevel.DEBUG,
      disableConsoleLogging: true,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeaderColor,
    FirebaseX,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
