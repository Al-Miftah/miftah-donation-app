import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base';
import { ApiService } from '../services/api/api.service';
import { CountryService } from '../services/country/country.service';
import { EventsService } from '../services/events/events.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage extends BasePage implements OnInit {
  public user = {
    phone_number: '',
    password: '',
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
    private events: EventsService
  ) {
    super(injector);
    this.codes = this.country.getCodes();
  }

  ngOnInit() {}

  async submit() {
    if (this.user.password === '' || this.user.phone_number === '') {
      return this.showToast('Please fill all required fields', 3000, undefined);
    }

    if (
      this.user.phone_number.length === 10 &&
      this.user.phone_number.substr(0, 1) === '0'
    ) {
      this.user.phone_number = this.user.phone_number.substr(1, 10);
    }
    this.user.phone_number = `${this.code.code}${this.user.phone_number}`;
    this.showLoadingView();
    try {
      const resp: any = await this.api.login(this.user);
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
