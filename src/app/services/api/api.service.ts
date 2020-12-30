import { Injectable } from '@angular/core';
import { AppConfig } from '../../app.config';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpService) {}

  /* AUTHENTICATION */

  /**
   * login
   */
  public login(data: { phone_number: string; password: string }): Promise<any> {
    return this.http.post(`${AppConfig.BASE_URL}/user/auth/login`, data);
  }

  /**
   * register
   */
  public register(data: {
    name: string;
    phone_number: string;
    password: string;
    fcm_token: string;
  }): Promise<any> {
    return this.http.post(`${AppConfig.BASE_URL}/user/auth/register`, data);
  }

  /**
   * logout
   */
  public logout(): Promise<any> {
    return this.http.get(`${AppConfig.BASE_URL}/user/auth/logout`);
  }

  /* PROFILE */

  /**
   * getProfile
   */
  public getProfile(): Promise<any> {
    return this.http.get(`${AppConfig.BASE_URL}/user/profile`);
  }

  /**
   * updateProfile
   */
  public updateProfile(data: {
    name?: string;
    phone_number?: string;
    avatar?: string;
    fcm_token?: string;
  }): Promise<any> {
    return this.http.patch(`${AppConfig.BASE_URL}/user/profile`, data);
  }

  /**
   * changePassword
   */
  public changePassword(data: {
    current_password: string;
    password: string;
    password_confirmation: string;
  }): Promise<any> {
    return this.http.patch(`${AppConfig.BASE_URL}/user/profile/password`, data);
  }

  /**
   * getNotifications
   */
  public getNotifications(): Promise<any> {
    return this.http.get(`${AppConfig.BASE_URL}/user/profile/notifications`);
  }

  /* EMAIL VERIFICATION */

  /**
   * emailVerification
   */
  public emailVerification(data: {}): Promise<any> {
    return this.http.post(
      `${AppConfig.BASE_URL}/email-verification/resend`,
      data
    );
  }

  /* PASSWORD RESET */

  /**
   * passwordReset
   */
  public passwordReset(data: { email: string }): Promise<any> {
    return this.http.get(`${AppConfig.BASE_URL}/password/email`, data);
  }

  /**
   * reset
   */
  public reset(data: {
    email: string;
    code: string;
    password: string;
    password_confirmation: string;
  }): Promise<any> {
    return this.http.post(`${AppConfig.BASE_URL}/password/reset`, data);
  }

  /* ORGANIZATION */

  /**
   * getOrganization
   */
  public getOrganization(id: string) {
    return this.http.get(`${AppConfig.BASE_URL}/organizations/${id}`);
  }

  /* DONATION */

  /**
   * makeDonation
   */
  public makeDonation(data: {
    transaction_reference?: string;
    payment_type?: string;
    amount?: string;
    currency?: string;
    gateway?: string;
    channel?: string;
    additional_information?: string;
    user_id?: number;
    organization_id?: number;
  }): Promise<any> {
    return this.http.post(`${AppConfig.BASE_URL}/donations`, data);
  }

  /**
   * updateDonation
   */
  public updateDonation(
    data: {
      transaction_reference?: string;
      payment_type?: string;
      amount?: string;
      currency?: string;
      gateway?: string;
      channel?: string;
      additional_information?: string;
      user_id?: number;
      organization_id?: number;
    },
    id: string
  ): Promise<any> {
    return this.http.post(`${AppConfig.BASE_URL}/speakers/${id}`, data);
  }

  /**
   * getDonations
   */
  public getDonations(): Promise<any> {
    return this.http.get(`${AppConfig.BASE_URL}/user/profile/donations`);
  }

  /* PAYSTACK */

  /**
   * payStack
   */
  public payStack(): Promise<any> {
    return this.http.get(`${AppConfig.BASE_URL}/checkout/paystack`);
  }

  /**
   * verifyTransaction
   */
  public verifyTransaction(ref: string): Promise<any> {
    return this.http.get(
      `${AppConfig.BASE_URL}/checkout/paystack/verify?reference=${ref}`
    );
  }
}
