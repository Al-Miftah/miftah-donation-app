import { AppConfig } from './app.config';
import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { EventsService } from './services/events/events.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private api: ApiService,
    private events: EventsService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private headerColor: HeaderColor,
    private statusBar: StatusBar,
    private firebaseX: FirebaseX,
    private alertCtrl: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setupEvents();
      this.setupStatusBar();
      this.setupPushNotifications();
      this.setupAndroidHeaderColor();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
    });
  }

  private loginUser(data: any) {
    this.auth.accessToken = `${data.token_type} ${data.access_token}`;
    this.auth.tokenExpiration = data.token_expiration;
    this.auth.user = data.user;
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

  private setupStatusBar() {
    if (this.platform.is('ios')) {
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleDefault();
    } else {
      this.statusBar.backgroundColorByHexString(AppConfig.HEADER_COLOR);
    }
  }

  private setupPushNotifications() {
    this.firebaseX.onTokenRefresh().subscribe(token => {
      this.registerToken(token);
    });

    this.firebaseX.onMessageReceived().subscribe(data => {
      if (!data.wasTapped){
        const payload: any = JSON.parse(data.payload);
        this.showAlert(payload.message, payload.title);
      }
    });
  }

  private setupAndroidHeaderColor() {
    if (AppConfig.HEADER_COLOR && this.platform.is('android')) {
      this.headerColor.tint(AppConfig.HEADER_COLOR).then();
    }
  }

  private async registerToken(token: string) {
    await this.api.updateProfile({device_token: token});
  }

  private async showAlert(
    message: string,
    header: string = '',
    subHeader: string = ''
  ): Promise<any> {
    const alert = await this.alertCtrl.create({
      header,
      subHeader,
      message,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
