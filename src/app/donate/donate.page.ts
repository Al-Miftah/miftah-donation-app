import { AppConfig } from '../app.config';
import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base';
import { ApiService } from '../services/api/api.service';
import { AuthService } from '../services/auth/auth.service';
declare const PaystackPop: any;

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage extends BasePage implements OnInit {
  public donation: any = {
    key: AppConfig.PAY_STACK.key,
    ref: `miftah-${Date.now()}`,
    label: '',
    email: 'almiftahapp@gmail.com',
    firstname: this.auth.user.name,
    lastname: '',
    phone: this.auth.user.phone_number,
    currency: 'GHS',
    plan: null,
    amount: null,
    channels: ['card', 'mobile_money'],
    metadata: {
      user_id: this.auth.user.id,
      plan_id: null,
      payment_type: 'monthly',
      organization_id: 1,
    },
  };
  public payments: any;
  public amount: number;
  public paymentType = 'monthly';
  public onetimePayments = [
    {
      name: 'GH₵ 5',
      active: false,
      value: 500,
    },
    {
      name: 'GH₵ 10',
      active: false,
      value: 1000,
    },
    {
      name: 'GH₵ 20',
      active: false,
      value: 2000,
    },
    {
      name: 'GH₵ 50',
      active: false,
      value: 50000,
    },
    {
      name: 'GH₵ 100',
      active: false,
      value: 100000,
    },
    {
      name: 'GH₵ 200',
      active: false,
      value: 200000,
    },
  ];
  constructor(
    injector: Injector,
    private auth: AuthService,
    private api: ApiService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.getPaymentOptions();
  }

  private async getPaymentOptions() {
    try {
      const payments: any = await this.api.payStack();
      this.payments = [];
      payments.data.forEach((element: any) => {
        element.active = false;
        this.payments.push(element);
      });
    } catch (error) {
      this.logError(error);
    }
  }

  segmentChanged(ev: any) {
    this.paymentType = ev.detail.value;
  }

  /**
   * selectPayment
   */
  public selectPayment(payment: any, payments: any) {
    payments.map((item: { active: boolean }) => (item.active = false));
    payment.active = true;
    this.amount = null;
    this.donation.label = payment.name;
    this.donation.amount = payment.value;
    if (this.paymentType === 'monthly') {
      this.donation.label = `${this.donation.label} monthly`;
      this.donation.plan = payment.paystack_plan_code;
      this.donation.metadata.plan_id = payment.id;
    }
    this.donation.metadata.payment_type = this.paymentType;
  }

  /**
   * submit
   */
  public submit() {
    let errorText =
      'You must select or enter an amount defore making your donation';
    if (this.paymentType === 'monthly') {
      errorText = 'You must select an amount defore making your donation';
    } else if (this.amount) {
      this.donation.label = `GH₵ ${this.amount}`;
      this.donation.amount = this.amount * 100;
    }

    if (this.donation.label === '') {
      return this.showToast(errorText, 3000, undefined);
    }

    this.donation.ref = `miftah-${Date.now()}`;
    this.donation.onClose = () => {};
    this.donation.callback = async (response: any) => {
      await this.api.verifyTransaction(response.reference);
    };
    const paystack = PaystackPop.setup(this.donation);
    paystack.openIframe();
  }
}
