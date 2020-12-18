import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base/base';
import { ApiService } from '../services/api/api.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends BasePage implements OnInit {
  public edit = true;
  public profile = 'userInfo';
  public pwd = {
    current_password: '',
    password: '',
    password_confirmation: '',
  };
  public user: any = {
    name: this.auth.user.name,
  };
  constructor(
    injector: Injector,
    private auth: AuthService,
    private api: ApiService
  ) {
    super(injector);
  }

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.profile = ev.detail.value;
  }

  /**
   * submit
   */
  public async submit() {
    if (
      this.pwd.current_password === '' ||
      this.pwd.password === '' ||
      this.pwd.password_confirmation === ''
    ) {
      return this.showToast('All fields are required', 3000, undefined);
    }

    if (this.pwd.password !== this.pwd.password_confirmation) {
      return this.showToast('new passwords did not match', 3000, undefined);
    }

    if (this.pwd.password.length < 6) {
      return this.showToast(
        'new password must be more than 6 characters',
        3000,
        undefined
      );
    }

    try {
      await this.api.changePassword(this.pwd);
      this.showAlert('Password updated successfully');
    } catch (error) {
      this.showToast(error.message, 3000, undefined);
      this.logError(error);
    }
  }

  /**
   * update
   */
  public async update() {
    if (this.user.name === '') {
      return this.showToast('Name field is required', 3000, undefined);
    }

    try {
      await this.api.updateProfile(this.user);

      for (const item in this.auth.user) {
        if (item !== 'name') {
          this.user[item] = this.auth.user[item];
        }
      }
      this.auth.user = this.user;
      this.edit = false;
      this.showAlert('User Info updated successfully');
    } catch (error) {
      this.showToast(error.message, 3000, undefined);
      this.logError(error);
    }
  }
}
