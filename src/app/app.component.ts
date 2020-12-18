import { AppConfig } from './app.config';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { EventsService } from './services/events/events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private events: EventsService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private headerColor: HeaderColor,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setupEvents();
      this.setupStatusBar();
      this.setupAndroidHeaderColor();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
    });
  }

  private setupEvents() {
    this.events
      .getObservable()
      .subscribe((data: { title: string; payload: any }) => {
        switch (data.title) {
          case 'user:login':
            this.loginUser(data.payload);
            break;
          case 'user:logout':
            this.auth.clearCache();
            break;
          default:
            break;
        }
      });
  }

  private loginUser(data: any) {
    this.auth.accessToken = `${data.token_type} ${data.access_token}`;
    this.auth.tokenExpiration = data.token_expiration;
    this.auth.user = data.user;
  }

  private setupStatusBar() {
    if (this.platform.is('ios')) {
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleDefault();
    } else {
      this.statusBar.backgroundColorByHexString(AppConfig.HEADER_COLOR);
    }
  }

  private setupAndroidHeaderColor() {
    if (AppConfig.HEADER_COLOR && this.platform.is('android')) {
      this.headerColor.tint(AppConfig.HEADER_COLOR).then();
    }
  }
}
