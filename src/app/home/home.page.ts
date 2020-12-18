import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base';
import { ApiService } from '../services/api/api.service';
import { AuthService } from '../services/auth/auth.service';
import { EventsService } from '../services/events/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {
  constructor(
    injector: Injector,
    private auth: AuthService,
    private api: ApiService,
    private events: EventsService
  ) {
    super(injector);
  }

  ngOnInit() {}

  public async logout() {
    try {
      await this.showConfirm('Are you sure you want to logout?', 'Logout', '');
      // await this.api.logout();
      this.events.publish('user:logout', {});
      this.navigateRoute('signin');
    } catch (error) {
      if (error.message) {
        this.showToast(error.message, 3000, undefined);
      }
      this.logError(error);
    }
  }
}
