export class AppConfig {
  /*  urls  */
  public static get BASE_URL(): string {
    return 'https://miftah.ultrasamad.com/api';
  }

  public static get APP_UUID(): string {
    return 'com.miftah.donation';
  }

  public static get PLATFORM(): string {
    return 'cordova';
  }

  public static get FACEBOOK_ID(): string {
    return '';
  }

  /* Header color (only Android Multitask view)  */
  public static get HEADER_COLOR(): string {
    return '#2ECC71';
  }

  public static get PAY_STACK(): any {
    return {
      key: 'pk_test_8c5e535136189ee160979ef717d572e567ad849c',
      plan: 'PLN_d8fc6gdpgdeo1qf'
    };
  }
}
