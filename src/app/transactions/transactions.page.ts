import { AppConfig } from '../app.config';
import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base';
import { ApiService } from '../services/api/api.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage extends BasePage implements OnInit {
  transactions: any;
  constructor(injector: Injector, private api: ApiService) {
    super(injector); // 024 479 4638
  }

  ngOnInit() {
    this.getTransactions();
  }

  private async getTransactions() {
    try {
      const transactions = await this.api.getDonations();
      this.transactions = transactions.data.reverse();
    } catch (error) {
      this.logError(error);
    }
  }
}
