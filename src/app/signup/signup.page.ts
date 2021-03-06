import { Component, Injector, OnInit } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { BasePage } from '../base/base';
import { ApiService } from '../services/api/api.service';
import { CountryService } from '../services/country/country.service';
import { EventsService } from '../services/events/events.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage extends BasePage implements OnInit {
  public phoneNumber: number = null;
  public user = {
    name: '',
    phone_number: null,
    password: '',
    password_confirmation: '',
    fcm_token: '',
  };
  public code = {
    code: '+233',
    name: 'Ghana',
  };
  public codes: any;
  constructor(
    injector: Injector,
    private country: CountryService,
    private api: ApiService,
    private firebaseX: FirebaseX,
    private events: EventsService
  ) {
    super(injector);
    this.codes = this.country.getCodes();
  }

  ngOnInit() {}

  async submit() {
    if (this.user.name === '' || this.phoneNumber === null) {
      return this.showToast('Please fill all required fields', 3000, undefined);
    }

    if (this.phoneNumber === null || this.phoneNumber.toString().length !== 9) {
      return this.showToast(
        'Please enter a valid phone number',
        3000,
        undefined
      );
    }

    if (this.user.password.length < 6) {
      return this.showToast(
        'Password is too short. It must be more the 5 characters',
        3000,
        undefined
      );
    }

    if (this.user.password !== this.user.password_confirmation) {
      return this.showToast('Passwords do not match', 3000, undefined);
    }

    this.user.phone_number = this.phoneNumber.toString();
    if (
      this.user.phone_number.length === 10 &&
      this.user.phone_number.substr(0, 1) === '0'
    ) {
      this.user.phone_number = this.user.phone_number.substr(1, 10);
    }
    this.user.phone_number = `${this.code.code}${this.user.phone_number}`;

    this.showLoadingView();
    try {
      if (this.isCordova()) {
        this.user.fcm_token = await this.firebaseX.getToken();
      }
      const resp: any = await this.api.register(this.user);
      this.events.publish('user:login', resp.data);
      this.navigateRoute('home');
      this.showContentView();
    } catch (error) {
      this.showContentView();
      this.showToast(error.message, 3000, undefined);
      this.logError(error);
    }
  }
}
