import { Injector } from '@angular/core';
import {
  LoadingController,
  ToastController,
  AlertController,
  ModalController,
  Platform,
} from '@ionic/angular';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';

export abstract class BasePage {
  public isErrorViewVisible = false;
  public isEmptyViewVisible = false;
  public isContentViewVisible = false;
  public isLoadingViewVisible = false;

  protected refresher: any;
  protected infiniteScroll: any;

  private loader: any = null;
  public toastCtrl: ToastController;
  private loadingCtrl: LoadingController;
  private modalCtrl: ModalController;
  private alertCtrl: AlertController;
  public platform: Platform;
  private logger: NGXLogger;
  private router: Router;

  constructor(injector: Injector) {
    this.platform = injector.get(Platform);
    this.loadingCtrl = injector.get(LoadingController);
    this.toastCtrl = injector.get(ToastController);
    this.modalCtrl = injector.get(ModalController);
    this.alertCtrl = injector.get(AlertController);
    this.logger = injector.get(NGXLogger);
    this.router = injector.get(Router);
  }

  /**
   * logError
   */
  public logError(error: any): void {
    this.logger.error(error);
  }

  /**
   * showLoadingView
   */
  public async showLoadingView(): Promise<any> {
    if (!this.isLoadingViewVisible) {
      this.isErrorViewVisible = false;
      this.isEmptyViewVisible = false;
      this.isContentViewVisible = false;
      this.isLoadingViewVisible = true;
      return new Promise(async () => {
        this.loader = await this.loadingCtrl.create({
          cssClass: 'loader',
          message: `<p class="bold">Loading. Please wait...</p>`,
        });
        await this.loader.present();
      });
    }
  }

  /**
   * dismissLoadingView
   */
  public async dismissLoadingView(): Promise<any> {
    if (this.loader) {
      await this.loader.dismiss().catch((e: any) =>
        this.logError({
          message: 'ERROR CATCH: LoadingController dismiss',
          error: e,
        })
      );
    }
  }

  /**
   * showContentView
   */
  public showContentView(): void {
    this.isErrorViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = true;
    this.dismissLoadingView();
  }

  /**
   * showEmptyView
   */
  public showEmptyView(): void {
    this.isErrorViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = true;
    this.dismissLoadingView();
  }

  /**
   * showErrorView
   */
  public showErrorView(): void {
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isErrorViewVisible = true;
    this.dismissLoadingView();
  }

  /**
   * onRefreshComplete
   */
  public onRefreshComplete(data = null): void {
    if (this.refresher) {
      this.refresher.complete();
    }
    if (this.infiniteScroll) {
      this.infiniteScroll.complete();
      if (data && data.length === 0) {
        this.infiniteScroll.enable(false);
      } else {
        this.infiniteScroll.enable(true);
      }
    }
  }

  /**
   * showToast
   */
  public async showToast(
    message: string = '',
    duration: number = 3000,
    color: string | undefined
  ): Promise<any> {
    const toast = await this.toastCtrl.create({
      message,
      duration,
      color,
    });
    toast.present();
  }

  /**
   * showConfirm
   */
  public async showConfirm(
    message: string,
    header: string = '',
    subHeader: string = ''
  ): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const confirm = await this.alertCtrl.create({
        header,
        subHeader,
        message,
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              reject();
            },
          },
          {
            text: 'Ok',
            handler: () => {
              resolve(true);
            },
          },
        ],
      });

      await confirm.present();
    });
  }

  /**
   * showAlert
   */
  public async showAlert(
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

  /**
   * openPage
   */
  public async openPage(page: any, params: any = {}): Promise<any> {
    const modal = await this.modalCtrl.create({
      component: page,
      componentProps: params,
      backdropDismiss: false,
      mode: this.platform.is('android') ? 'md' : 'ios',
    });
    return await modal.present();
  }

  /**
   * closePage
   */
  public closePage(params: any = {}): void {
    this.modalCtrl.dismiss(params);
  }

  /**
   * navigateRoute
   */
  public navigateRoute(page: any, params: any = {}) {
    return this.router.navigate([page], params);
  }

  /**
   * isCordova
   */
  public isCordova(): boolean {
    return this.platform.is('cordova');
  }
}
