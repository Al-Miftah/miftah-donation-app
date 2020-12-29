import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  public numbers = [
    '+233244890170',
    '+233208722189',
    '+233243844983',
    '+233553706080',
    '+233242828501'
  ];
  constructor(
    private callNumber: CallNumber,
    private actionSheetController: ActionSheetController,
    ) {}

  ngOnInit() {}

  public async processNumber(phoneNumber: string) {
    const actionSheet = await this.actionSheetController.create({
      header: phoneNumber,
      buttons: [
        {
          text: 'Call',
          icon: 'call-outline',
          handler: async () => {
            await this.callNumber.callNumber(phoneNumber, true);
          }
        },
        {
        text: 'WhatsApp',
        icon: 'logo-whatsapp',
        handler: () => {
          window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`);
        }
      },
      {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }
}
