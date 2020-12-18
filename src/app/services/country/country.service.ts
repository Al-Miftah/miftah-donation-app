import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor() {}

  /**
   * getCodes
   */
  public getCodes() {
    return [
      {
        code: '+7 840',
        name: 'Abkhazia',
      },
      {
        code: '+93',
        name: 'Afghanistan',
      },
      {
        code: '+355',
        name: 'Albania',
      },
      {
        code: '+213',
        name: 'Algeria',
      },
      {
        code: '+1 684',
        name: 'American Samoa',
      },
      {
        code: '+376',
        name: 'Andorra',
      },
      {
        code: '+244',
        name: 'Angola',
      },
      {
        code: '+1 264',
        name: 'Anguilla',
      },
      {
        code: '+1 268',
        name: 'Antigua and Barbuda',
      },
      {
        code: '+54',
        name: 'Argentina',
      },
      {
        code: '+374',
        name: 'Armenia',
      },
      {
        code: '+297',
        name: 'Aruba',
      },
      {
        code: '+247',
        name: 'Ascension',
      },
      {
        code: '+61',
        name: 'Australia',
      },
      {
        code: '+672',
        name: 'Australian External Territories',
      },
      {
        code: '+43',
        name: 'Austria',
      },
      {
        code: '+994',
        name: 'Azerbaijan',
      },
      {
        code: '+1 242',
        name: 'Bahamas',
      },
      {
        code: '+973',
        name: 'Bahrain',
      },
      {
        code: '+880',
        name: 'Bangladesh',
      },
      {
        code: '+1 246',
        name: 'Barbados',
      },
      {
        code: '+1 268',
        name: 'Barbuda',
      },
      {
        code: '+375',
        name: 'Belarus',
      },
      {
        code: '+32',
        name: 'Belgium',
      },
      {
        code: '+501',
        name: 'Belize',
      },
      {
        code: '+229',
        name: 'Benin',
      },
      {
        code: '+1 441',
        name: 'Bermuda',
      },
      {
        code: '+975',
        name: 'Bhutan',
      },
      {
        code: '+591',
        name: 'Bolivia',
      },
      {
        code: '+387',
        name: 'Bosnia and Herzegovina',
      },
      {
        code: '+267',
        name: 'Botswana',
      },
      {
        code: '+55',
        name: 'Brazil',
      },
      {
        code: '+246',
        name: 'British Indian Ocean Territory',
      },
      {
        code: '+1 284',
        name: 'British Virgin Islands',
      },
      {
        code: '+673',
        name: 'Brunei',
      },
      {
        code: '+359',
        name: 'Bulgaria',
      },
      {
        code: '+226',
        name: 'Burkina Faso',
      },
      {
        code: '+257',
        name: 'Burundi',
      },
      {
        code: '+855',
        name: 'Cambodia',
      },
      {
        code: '+237',
        name: 'Cameroon',
      },
      {
        code: '+1',
        name: 'Canada',
      },
      {
        code: '+238',
        name: 'Cape Verde',
      },
      {
        code: '+ 345',
        name: 'Cayman Islands',
      },
      {
        code: '+236',
        name: 'Central African Republic',
      },
      {
        code: '+235',
        name: 'Chad',
      },
      {
        code: '+56',
        name: 'Chile',
      },
      {
        code: '+86',
        name: 'China',
      },
      {
        code: '+61',
        name: 'Christmas Island',
      },
      {
        code: '+61',
        name: 'Cocos-Keeling Islands',
      },
      {
        code: '+57',
        name: 'Colombia',
      },
      {
        code: '+269',
        name: 'Comoros',
      },
      {
        code: '+242',
        name: 'Congo',
      },
      {
        code: '+243',
        name: 'Congo, Dem. Rep. of (Zaire)',
      },
      {
        code: '+682',
        name: 'Cook Islands',
      },
      {
        code: '+506',
        name: 'Costa Rica',
      },
      {
        code: '+385',
        name: 'Croatia',
      },
      {
        code: '+53',
        name: 'Cuba',
      },
      {
        code: '+599',
        name: 'Curacao',
      },
      {
        code: '+537',
        name: 'Cyprus',
      },
      {
        code: '+420',
        name: 'Czech Republic',
      },
      {
        code: '+45',
        name: 'Denmark',
      },
      {
        code: '+246',
        name: 'Diego Garcia',
      },
      {
        code: '+253',
        name: 'Djibouti',
      },
      {
        code: '+1 767',
        name: 'Dominica',
      },
      {
        code: '+1 809',
        name: 'Dominican Republic',
      },
      {
        code: '+670',
        name: 'East Timor',
      },
      {
        code: '+56',
        name: 'Easter Island',
      },
      {
        code: '+593',
        name: 'Ecuador',
      },
      {
        code: '+20',
        name: 'Egypt',
      },
      {
        code: '+503',
        name: 'El Salvador',
      },
      {
        code: '+240',
        name: 'Equatorial Guinea',
      },
      {
        code: '+291',
        name: 'Eritrea',
      },
      {
        code: '+372',
        name: 'Estonia',
      },
      {
        code: '+251',
        name: 'Ethiopia',
      },
      {
        code: '+500',
        name: 'Falkland Islands',
      },
      {
        code: '+298',
        name: 'Faroe Islands',
      },
      {
        code: '+679',
        name: 'Fiji',
      },
      {
        code: '+358',
        name: 'Finland',
      },
      {
        code: '+33',
        name: 'France',
      },
      {
        code: '+596',
        name: 'French Antilles',
      },
      {
        code: '+594',
        name: 'French Guiana',
      },
      {
        code: '+689',
        name: 'French Polynesia',
      },
      {
        code: '+241',
        name: 'Gabon',
      },
      {
        code: '+220',
        name: 'Gambia',
      },
      {
        code: '+995',
        name: 'Georgia',
      },
      {
        code: '+49',
        name: 'Germany',
      },
      {
        code: '+233',
        name: 'Ghana',
      },
      {
        code: '+350',
        name: 'Gibraltar',
      },
      {
        code: '+30',
        name: 'Greece',
      },
      {
        code: '+299',
        name: 'Greenland',
      },
      {
        code: '+1 473',
        name: 'Grenada',
      },
      {
        code: '+590',
        name: 'Guadeloupe',
      },
      {
        code: '+1 671',
        name: 'Guam',
      },
      {
        code: '+502',
        name: 'Guatemala',
      },
      {
        code: '+224',
        name: 'Guinea',
      },
      {
        code: '+245',
        name: 'Guinea-Bissau',
      },
      {
        code: '+595',
        name: 'Guyana',
      },
      {
        code: '+509',
        name: 'Haiti',
      },
      {
        code: '+504',
        name: 'Honduras',
      },
      {
        code: '+852',
        name: 'Hong Kong SAR China',
      },
      {
        code: '+36',
        name: 'Hungary',
      },
      {
        code: '+354',
        name: 'Iceland',
      },
      {
        code: '+91',
        name: 'India',
      },
      {
        code: '+62',
        name: 'Indonesia',
      },
      {
        code: '+98',
        name: 'Iran',
      },
      {
        code: '+964',
        name: 'Iraq',
      },
      {
        code: '+353',
        name: 'Ireland',
      },
      {
        code: '+972',
        name: 'Israel',
      },
      {
        code: '+39',
        name: 'Italy',
      },
      {
        code: '+225',
        name: 'Ivory Coast',
      },
      {
        code: '+1 876',
        name: 'Jamaica',
      },
      {
        code: '+81',
        name: 'Japan',
      },
      {
        code: '+962',
        name: 'Jordan',
      },
      {
        code: '+7 7',
        name: 'Kazakhstan',
      },
      {
        code: '+254',
        name: 'Kenya',
      },
      {
        code: '+686',
        name: 'Kiribati',
      },
      {
        code: '+965',
        name: 'Kuwait',
      },
      {
        code: '+996',
        name: 'Kyrgyzstan',
      },
      {
        code: '+856',
        name: 'Laos',
      },
      {
        code: '+371',
        name: 'Latvia',
      },
      {
        code: '+961',
        name: 'Lebanon',
      },
      {
        code: '+266',
        name: 'Lesotho',
      },
      {
        code: '+231',
        name: 'Liberia',
      },
      {
        code: '+218',
        name: 'Libya',
      },
      {
        code: '+423',
        name: 'Liechtenstein',
      },
      {
        code: '+370',
        name: 'Lithuania',
      },
      {
        code: '+352',
        name: 'Luxembourg',
      },
      {
        code: '+853',
        name: 'Macau SAR China',
      },
      {
        code: '+389',
        name: 'Macedonia',
      },
      {
        code: '+261',
        name: 'Madagascar',
      },
      {
        code: '+265',
        name: 'Malawi',
      },
      {
        code: '+60',
        name: 'Malaysia',
      },
      {
        code: '+960',
        name: 'Maldives',
      },
      {
        code: '+223',
        name: 'Mali',
      },
      {
        code: '+356',
        name: 'Malta',
      },
      {
        code: '+692',
        name: 'Marshall Islands',
      },
      {
        code: '+596',
        name: 'Martinique',
      },
      {
        code: '+222',
        name: 'Mauritania',
      },
      {
        code: '+230',
        name: 'Mauritius',
      },
      {
        code: '+262',
        name: 'Mayotte',
      },
      {
        code: '+52',
        name: 'Mexico',
      },
      {
        code: '+691',
        name: 'Micronesia',
      },
      {
        code: '+1 808',
        name: 'Midway Island',
      },
      {
        code: '+373',
        name: 'Moldova',
      },
      {
        code: '+377',
        name: 'Monaco',
      },
      {
        code: '+976',
        name: 'Mongolia',
      },
      {
        code: '+382',
        name: 'Montenegro',
      },
      {
        code: '+1664',
        name: 'Montserrat',
      },
      {
        code: '+212',
        name: 'Morocco',
      },
      {
        code: '+95',
        name: 'Myanmar',
      },
      {
        code: '+264',
        name: 'Namibia',
      },
      {
        code: '+674',
        name: 'Nauru',
      },
      {
        code: '+977',
        name: 'Nepal',
      },
      {
        code: '+31',
        name: 'Netherlands',
      },
      {
        code: '+599',
        name: 'Netherlands Antilles',
      },
      {
        code: '+1 869',
        name: 'Nevis',
      },
      {
        code: '+687',
        name: 'New Caledonia',
      },
      {
        code: '+64',
        name: 'New Zealand',
      },
      {
        code: '+505',
        name: 'Nicaragua',
      },
      {
        code: '+227',
        name: 'Niger',
      },
      {
        code: '+234',
        name: 'Nigeria',
      },
      {
        code: '+683',
        name: 'Niue',
      },
      {
        code: '+672',
        name: 'Norfolk Island',
      },
      {
        code: '+850',
        name: 'North Korea',
      },
      {
        code: '+1 670',
        name: 'Northern Mariana Islands',
      },
      {
        code: '+47',
        name: 'Norway',
      },
      {
        code: '+968',
        name: 'Oman',
      },
      {
        code: '+92',
        name: 'Pakistan',
      },
      {
        code: '+680',
        name: 'Palau',
      },
      {
        code: '+970',
        name: 'Palestinian Territory',
      },
      {
        code: '+507',
        name: 'Panama',
      },
      {
        code: '+675',
        name: 'Papua New Guinea',
      },
      {
        code: '+595',
        name: 'Paraguay',
      },
      {
        code: '+51',
        name: 'Peru',
      },
      {
        code: '+63',
        name: 'Philippines',
      },
      {
        code: '+48',
        name: 'Poland',
      },
      {
        code: '+351',
        name: 'Portugal',
      },
      {
        code: '+1 787',
        name: 'Puerto Rico',
      },
      {
        code: '+974',
        name: 'Qatar',
      },
      {
        code: '+262',
        name: 'Reunion',
      },
      {
        code: '+40',
        name: 'Romania',
      },
      {
        code: '+7',
        name: 'Russia',
      },
      {
        code: '+250',
        name: 'Rwanda',
      },
      {
        code: '+685',
        name: 'Samoa',
      },
      {
        code: '+378',
        name: 'San Marino',
      },
      {
        code: '+966',
        name: 'Saudi Arabia',
      },
      {
        code: '+221',
        name: 'Senegal',
      },
      {
        code: '+381',
        name: 'Serbia',
      },
      {
        code: '+248',
        name: 'Seychelles',
      },
      {
        code: '+232',
        name: 'Sierra Leone',
      },
      {
        code: '+65',
        name: 'Singapore',
      },
      {
        code: '+421',
        name: 'Slovakia',
      },
      {
        code: '+386',
        name: 'Slovenia',
      },
      {
        code: '+677',
        name: 'Solomon Islands',
      },
      {
        code: '+27',
        name: 'South Africa',
      },
      {
        code: '+500',
        name: 'South Georgia and the South Sandwich Islands',
      },
      {
        code: '+82',
        name: 'South Korea',
      },
      {
        code: '+34',
        name: 'Spain',
      },
      {
        code: '+94',
        name: 'Sri Lanka',
      },
      {
        code: '+249',
        name: 'Sudan',
      },
      {
        code: '+597',
        name: 'Suriname',
      },
      {
        code: '+268',
        name: 'Swaziland',
      },
      {
        code: '+46',
        name: 'Sweden',
      },
      {
        code: '+41',
        name: 'Switzerland',
      },
      {
        code: '+963',
        name: 'Syria',
      },
      {
        code: '+886',
        name: 'Taiwan',
      },
      {
        code: '+992',
        name: 'Tajikistan',
      },
      {
        code: '+255',
        name: 'Tanzania',
      },
      {
        code: '+66',
        name: 'Thailand',
      },
      {
        code: '+670',
        name: 'Timor Leste',
      },
      {
        code: '+228',
        name: 'Togo',
      },
      {
        code: '+690',
        name: 'Tokelau',
      },
      {
        code: '+676',
        name: 'Tonga',
      },
      {
        code: '+1 868',
        name: 'Trinidad and Tobago',
      },
      {
        code: '+216',
        name: 'Tunisia',
      },
      {
        code: '+90',
        name: 'Turkey',
      },
      {
        code: '+993',
        name: 'Turkmenistan',
      },
      {
        code: '+1 649',
        name: 'Turks and Caicos Islands',
      },
      {
        code: '+688',
        name: 'Tuvalu',
      },
      {
        code: '+1 340',
        name: 'U.S. Virgin Islands',
      },
      {
        code: '+256',
        name: 'Uganda',
      },
      {
        code: '+380',
        name: 'Ukraine',
      },
      {
        code: '+971',
        name: 'United Arab Emirates',
      },
      {
        code: '+44',
        name: 'United Kingdom',
      },
      {
        code: '+1',
        name: 'United States',
      },
      {
        code: '+598',
        name: 'Uruguay',
      },
      {
        code: '+998',
        name: 'Uzbekistan',
      },
      {
        code: '+678',
        name: 'Vanuatu',
      },
      {
        code: '+58',
        name: 'Venezuela',
      },
      {
        code: '+84',
        name: 'Vietnam',
      },
      {
        code: '+1 808',
        name: 'Wake Island',
      },
      {
        code: '+681',
        name: 'Wallis and Futuna',
      },
      {
        code: '+967',
        name: 'Yemen',
      },
      {
        code: '+260',
        name: 'Zambia',
      },
      {
        code: '+255',
        name: 'Zanzibar',
      },
      {
        code: '+263',
        name: 'Zimbabwe',
      },
    ];
  }

  /**
   * getCurrency
   */
  public getCurrency() {
    return [
        {
          symbol: '$',
          name: 'US Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'USD',
          name_plural: 'US dollars'
        },
        {
          symbol: 'CA$',
          name: 'Canadian Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'CAD',
          name_plural: 'Canadian dollars'
        },
        {
          symbol: '€',
          name: 'Euro',
          symbol_native: '€',
          decimal_digits: 2,
          rounding: 0,
          code: 'EUR',
          name_plural: 'euros'
        },
        {
          symbol: 'AED',
          name: 'United Arab Emirates Dirham',
          symbol_native: 'د.إ.‏',
          decimal_digits: 2,
          rounding: 0,
          code: 'AED',
          name_plural: 'UAE dirhams'
        },
        {
          symbol: 'Af',
          name: 'Afghan Afghani',
          symbol_native: '؋',
          decimal_digits: 0,
          rounding: 0,
          code: 'AFN',
          name_plural: 'Afghan Afghanis'
        },
        {
          symbol: 'ALL',
          name: 'Albanian Lek',
          symbol_native: 'Lek',
          decimal_digits: 0,
          rounding: 0,
          code: 'ALL',
          name_plural: 'Albanian lekë'
        },
        {
          symbol: 'AMD',
          name: 'Armenian Dram',
          symbol_native: 'դր.',
          decimal_digits: 0,
          rounding: 0,
          code: 'AMD',
          name_plural: 'Armenian drams'
        },
        {
          symbol: 'AR$',
          name: 'Argentine Peso',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'ARS',
          name_plural: 'Argentine pesos'
        },
        {
          symbol: 'AU$',
          name: 'Australian Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'AUD',
          name_plural: 'Australian dollars'
        },
        {
          symbol: 'man.',
          name: 'Azerbaijani Manat',
          symbol_native: 'ман.',
          decimal_digits: 2,
          rounding: 0,
          code: 'AZN',
          name_plural: 'Azerbaijani manats'
        },
        {
          symbol: 'KM',
          name: 'Bosnia-Herzegovina Convertible Mark',
          symbol_native: 'KM',
          decimal_digits: 2,
          rounding: 0,
          code: 'BAM',
          name_plural: 'Bosnia-Herzegovina convertible marks'
        },
        {
          symbol: 'Tk',
          name: 'Bangladeshi Taka',
          symbol_native: '৳',
          decimal_digits: 2,
          rounding: 0,
          code: 'BDT',
          name_plural: 'Bangladeshi takas'
        },
        {
          symbol: 'BGN',
          name: 'Bulgarian Lev',
          symbol_native: 'лв.',
          decimal_digits: 2,
          rounding: 0,
          code: 'BGN',
          name_plural: 'Bulgarian leva'
        },
        {
          symbol: 'BD',
          name: 'Bahraini Dinar',
          symbol_native: 'د.ب.‏',
          decimal_digits: 3,
          rounding: 0,
          code: 'BHD',
          name_plural: 'Bahraini dinars'
        },
        {
          symbol: 'FBu',
          name: 'Burundian Franc',
          symbol_native: 'FBu',
          decimal_digits: 0,
          rounding: 0,
          code: 'BIF',
          name_plural: 'Burundian francs'
        },
        {
          symbol: 'BN$',
          name: 'Brunei Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'BND',
          name_plural: 'Brunei dollars'
        },
        {
          symbol: 'Bs',
          name: 'Bolivian Boliviano',
          symbol_native: 'Bs',
          decimal_digits: 2,
          rounding: 0,
          code: 'BOB',
          name_plural: 'Bolivian bolivianos'
        },
        {
          symbol: 'R$',
          name: 'Brazilian Real',
          symbol_native: 'R$',
          decimal_digits: 2,
          rounding: 0,
          code: 'BRL',
          name_plural: 'Brazilian reals'
        },
        {
          symbol: 'BWP',
          name: 'Botswanan Pula',
          symbol_native: 'P',
          decimal_digits: 2,
          rounding: 0,
          code: 'BWP',
          name_plural: 'Botswanan pulas'
        },
        {
          symbol: 'Br',
          name: 'Belarusian Ruble',
          symbol_native: 'руб.',
          decimal_digits: 2,
          rounding: 0,
          code: 'BYN',
          name_plural: 'Belarusian rubles'
        },
        {
          symbol: 'BZ$',
          name: 'Belize Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'BZD',
          name_plural: 'Belize dollars'
        },
        {
          symbol: 'CDF',
          name: 'Congolese Franc',
          symbol_native: 'FrCD',
          decimal_digits: 2,
          rounding: 0,
          code: 'CDF',
          name_plural: 'Congolese francs'
        },
        {
          symbol: 'CHF',
          name: 'Swiss Franc',
          symbol_native: 'CHF',
          decimal_digits: 2,
          rounding: 0.05,
          code: 'CHF',
          name_plural: 'Swiss francs'
        },
        {
          symbol: 'CL$',
          name: 'Chilean Peso',
          symbol_native: '$',
          decimal_digits: 0,
          rounding: 0,
          code: 'CLP',
          name_plural: 'Chilean pesos'
        },
        {
          symbol: 'CN¥',
          name: 'Chinese Yuan',
          symbol_native: 'CN¥',
          decimal_digits: 2,
          rounding: 0,
          code: 'CNY',
          name_plural: 'Chinese yuan'
        },
        {
          symbol: 'CO$',
          name: 'Colombian Peso',
          symbol_native: '$',
          decimal_digits: 0,
          rounding: 0,
          code: 'COP',
          name_plural: 'Colombian pesos'
        },
        {
          symbol: '₡',
          name: 'Costa Rican Colón',
          symbol_native: '₡',
          decimal_digits: 0,
          rounding: 0,
          code: 'CRC',
          name_plural: 'Costa Rican colóns'
        },
        {
          symbol: 'CV$',
          name: 'Cape Verdean Escudo',
          symbol_native: 'CV$',
          decimal_digits: 2,
          rounding: 0,
          code: 'CVE',
          name_plural: 'Cape Verdean escudos'
        },
        {
          symbol: 'Kč',
          name: 'Czech Republic Koruna',
          symbol_native: 'Kč',
          decimal_digits: 2,
          rounding: 0,
          code: 'CZK',
          name_plural: 'Czech Republic korunas'
        },
        {
          symbol: 'Fdj',
          name: 'Djiboutian Franc',
          symbol_native: 'Fdj',
          decimal_digits: 0,
          rounding: 0,
          code: 'DJF',
          name_plural: 'Djiboutian francs'
        },
        {
          symbol: 'Dkr',
          name: 'Danish Krone',
          symbol_native: 'kr',
          decimal_digits: 2,
          rounding: 0,
          code: 'DKK',
          name_plural: 'Danish kroner'
        },
        {
          symbol: 'RD$',
          name: 'Dominican Peso',
          symbol_native: 'RD$',
          decimal_digits: 2,
          rounding: 0,
          code: 'DOP',
          name_plural: 'Dominican pesos'
        },
        {
          symbol: 'DA',
          name: 'Algerian Dinar',
          symbol_native: 'د.ج.‏',
          decimal_digits: 2,
          rounding: 0,
          code: 'DZD',
          name_plural: 'Algerian dinars'
        },
        {
          symbol: 'Ekr',
          name: 'Estonian Kroon',
          symbol_native: 'kr',
          decimal_digits: 2,
          rounding: 0,
          code: 'EEK',
          name_plural: 'Estonian kroons'
        },
        {
          symbol: 'EGP',
          name: 'Egyptian Pound',
          symbol_native: 'ج.م.‏',
          decimal_digits: 2,
          rounding: 0,
          code: 'EGP',
          name_plural: 'Egyptian pounds'
        },
        {
          symbol: 'Nfk',
          name: 'Eritrean Nakfa',
          symbol_native: 'Nfk',
          decimal_digits: 2,
          rounding: 0,
          code: 'ERN',
          name_plural: 'Eritrean nakfas'
        },
        {
          symbol: 'Br',
          name: 'Ethiopian Birr',
          symbol_native: 'Br',
          decimal_digits: 2,
          rounding: 0,
          code: 'ETB',
          name_plural: 'Ethiopian birrs'
        },
        {
          symbol: '£',
          name: 'British Pound Sterling',
          symbol_native: '£',
          decimal_digits: 2,
          rounding: 0,
          code: 'GBP',
          name_plural: 'British pounds sterling'
        },
        {
          symbol: 'GEL',
          name: 'Georgian Lari',
          symbol_native: 'GEL',
          decimal_digits: 2,
          rounding: 0,
          code: 'GEL',
          name_plural: 'Georgian laris'
        },
        {
          symbol: 'GH₵',
          name: 'Ghanaian Cedi',
          symbol_native: 'GH₵',
          decimal_digits: 2,
          rounding: 0,
          code: 'GHS',
          name_plural: 'Ghanaian cedis'
        },
        {
          symbol: 'FG',
          name: 'Guinean Franc',
          symbol_native: 'FG',
          decimal_digits: 0,
          rounding: 0,
          code: 'GNF',
          name_plural: 'Guinean francs'
        },
        {
          symbol: 'GTQ',
          name: 'Guatemalan Quetzal',
          symbol_native: 'Q',
          decimal_digits: 2,
          rounding: 0,
          code: 'GTQ',
          name_plural: 'Guatemalan quetzals'
        },
        {
          symbol: 'HK$',
          name: 'Hong Kong Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'HKD',
          name_plural: 'Hong Kong dollars'
        },
        {
          symbol: 'HNL',
          name: 'Honduran Lempira',
          symbol_native: 'L',
          decimal_digits: 2,
          rounding: 0,
          code: 'HNL',
          name_plural: 'Honduran lempiras'
        },
        {
          symbol: 'kn',
          name: 'Croatian Kuna',
          symbol_native: 'kn',
          decimal_digits: 2,
          rounding: 0,
          code: 'HRK',
          name_plural: 'Croatian kunas'
        },
        {
          symbol: 'Ft',
          name: 'Hungarian Forint',
          symbol_native: 'Ft',
          decimal_digits: 0,
          rounding: 0,
          code: 'HUF',
          name_plural: 'Hungarian forints'
        },
        {
          symbol: 'Rp',
          name: 'Indonesian Rupiah',
          symbol_native: 'Rp',
          decimal_digits: 0,
          rounding: 0,
          code: 'IDR',
          name_plural: 'Indonesian rupiahs'
        },
        {
          symbol: '₪',
          name: 'Israeli New Sheqel',
          symbol_native: '₪',
          decimal_digits: 2,
          rounding: 0,
          code: 'ILS',
          name_plural: 'Israeli new sheqels'
        },
        {
          symbol: 'Rs',
          name: 'Indian Rupee',
          symbol_native: 'টকা',
          decimal_digits: 2,
          rounding: 0,
          code: 'INR',
          name_plural: 'Indian rupees'
        },
        {
          symbol: 'IQD',
          name: 'Iraqi Dinar',
          symbol_native: 'د.ع.‏',
          decimal_digits: 0,
          rounding: 0,
          code: 'IQD',
          name_plural: 'Iraqi dinars'
        },
        {
          symbol: 'IRR',
          name: 'Iranian Rial',
          symbol_native: '﷼',
          decimal_digits: 0,
          rounding: 0,
          code: 'IRR',
          name_plural: 'Iranian rials'
        },
        {
          symbol: 'Ikr',
          name: 'Icelandic Króna',
          symbol_native: 'kr',
          decimal_digits: 0,
          rounding: 0,
          code: 'ISK',
          name_plural: 'Icelandic krónur'
        },
        {
          symbol: 'J$',
          name: 'Jamaican Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'JMD',
          name_plural: 'Jamaican dollars'
        },
        {
          symbol: 'JD',
          name: 'Jordanian Dinar',
          symbol_native: 'د.أ.‏',
          decimal_digits: 3,
          rounding: 0,
          code: 'JOD',
          name_plural: 'Jordanian dinars'
        },
        {
          symbol: '¥',
          name: 'Japanese Yen',
          symbol_native: '￥',
          decimal_digits: 0,
          rounding: 0,
          code: 'JPY',
          name_plural: 'Japanese yen'
        },
        {
          symbol: 'Ksh',
          name: 'Kenyan Shilling',
          symbol_native: 'Ksh',
          decimal_digits: 2,
          rounding: 0,
          code: 'KES',
          name_plural: 'Kenyan shillings'
        },
        {
          symbol: 'KHR',
          name: 'Cambodian Riel',
          symbol_native: '៛',
          decimal_digits: 2,
          rounding: 0,
          code: 'KHR',
          name_plural: 'Cambodian riels'
        },
        {
          symbol: 'CF',
          name: 'Comorian Franc',
          symbol_native: 'FC',
          decimal_digits: 0,
          rounding: 0,
          code: 'KMF',
          name_plural: 'Comorian francs'
        },
        {
          symbol: '₩',
          name: 'South Korean Won',
          symbol_native: '₩',
          decimal_digits: 0,
          rounding: 0,
          code: 'KRW',
          name_plural: 'South Korean won'
        },
        {
          symbol: 'KD',
          name: 'Kuwaiti Dinar',
          symbol_native: 'د.ك.‏',
          decimal_digits: 3,
          rounding: 0,
          code: 'KWD',
          name_plural: 'Kuwaiti dinars'
        },
        {
          symbol: 'KZT',
          name: 'Kazakhstani Tenge',
          symbol_native: 'тңг.',
          decimal_digits: 2,
          rounding: 0,
          code: 'KZT',
          name_plural: 'Kazakhstani tenges'
        },
        {
          symbol: 'LB£',
          name: 'Lebanese Pound',
          symbol_native: 'ل.ل.‏',
          decimal_digits: 0,
          rounding: 0,
          code: 'LBP',
          name_plural: 'Lebanese pounds'
        },
        {
          symbol: 'SLRs',
          name: 'Sri Lankan Rupee',
          symbol_native: 'SL Re',
          decimal_digits: 2,
          rounding: 0,
          code: 'LKR',
          name_plural: 'Sri Lankan rupees'
        },
        {
          symbol: 'Lt',
          name: 'Lithuanian Litas',
          symbol_native: 'Lt',
          decimal_digits: 2,
          rounding: 0,
          code: 'LTL',
          name_plural: 'Lithuanian litai'
        },
        {
          symbol: 'Ls',
          name: 'Latvian Lats',
          symbol_native: 'Ls',
          decimal_digits: 2,
          rounding: 0,
          code: 'LVL',
          name_plural: 'Latvian lati'
        },
        {
          symbol: 'LD',
          name: 'Libyan Dinar',
          symbol_native: 'د.ل.‏',
          decimal_digits: 3,
          rounding: 0,
          code: 'LYD',
          name_plural: 'Libyan dinars'
        },
        {
          symbol: 'MAD',
          name: 'Moroccan Dirham',
          symbol_native: 'د.م.‏',
          decimal_digits: 2,
          rounding: 0,
          code: 'MAD',
          name_plural: 'Moroccan dirhams'
        },
        {
          symbol: 'MDL',
          name: 'Moldovan Leu',
          symbol_native: 'MDL',
          decimal_digits: 2,
          rounding: 0,
          code: 'MDL',
          name_plural: 'Moldovan lei'
        },
        {
          symbol: 'MGA',
          name: 'Malagasy Ariary',
          symbol_native: 'MGA',
          decimal_digits: 0,
          rounding: 0,
          code: 'MGA',
          name_plural: 'Malagasy Ariaries'
        },
        {
          symbol: 'MKD',
          name: 'Macedonian Denar',
          symbol_native: 'MKD',
          decimal_digits: 2,
          rounding: 0,
          code: 'MKD',
          name_plural: 'Macedonian denari'
        },
        {
          symbol: 'MMK',
          name: 'Myanma Kyat',
          symbol_native: 'K',
          decimal_digits: 0,
          rounding: 0,
          code: 'MMK',
          name_plural: 'Myanma kyats'
        },
        {
          symbol: 'MOP$',
          name: 'Macanese Pataca',
          symbol_native: 'MOP$',
          decimal_digits: 2,
          rounding: 0,
          code: 'MOP',
          name_plural: 'Macanese patacas'
        },
        {
          symbol: 'MURs',
          name: 'Mauritian Rupee',
          symbol_native: 'MURs',
          decimal_digits: 0,
          rounding: 0,
          code: 'MUR',
          name_plural: 'Mauritian rupees'
        },
        {
          symbol: 'MX$',
          name: 'Mexican Peso',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'MXN',
          name_plural: 'Mexican pesos'
        },
        {
          symbol: 'RM',
          name: 'Malaysian Ringgit',
          symbol_native: 'RM',
          decimal_digits: 2,
          rounding: 0,
          code: 'MYR',
          name_plural: 'Malaysian ringgits'
        },
        {
          symbol: 'MTn',
          name: 'Mozambican Metical',
          symbol_native: 'MTn',
          decimal_digits: 2,
          rounding: 0,
          code: 'MZN',
          name_plural: 'Mozambican meticals'
        },
        {
          symbol: 'N$',
          name: 'Namibian Dollar',
          symbol_native: 'N$',
          decimal_digits: 2,
          rounding: 0,
          code: 'NAD',
          name_plural: 'Namibian dollars'
        },
        {
          symbol: '₦',
          name: 'Nigerian Naira',
          symbol_native: '₦',
          decimal_digits: 2,
          rounding: 0,
          code: 'NGN',
          name_plural: 'Nigerian nairas'
        },
        {
          symbol: 'C$',
          name: 'Nicaraguan Córdoba',
          symbol_native: 'C$',
          decimal_digits: 2,
          rounding: 0,
          code: 'NIO',
          name_plural: 'Nicaraguan córdobas'
        },
        {
          symbol: 'Nkr',
          name: 'Norwegian Krone',
          symbol_native: 'kr',
          decimal_digits: 2,
          rounding: 0,
          code: 'NOK',
          name_plural: 'Norwegian kroner'
        },
        {
          symbol: 'NPRs',
          name: 'Nepalese Rupee',
          symbol_native: 'नेरू',
          decimal_digits: 2,
          rounding: 0,
          code: 'NPR',
          name_plural: 'Nepalese rupees'
        },
        {
          symbol: 'NZ$',
          name: 'New Zealand Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'NZD',
          name_plural: 'New Zealand dollars'
        },
        {
          symbol: 'OMR',
          name: 'Omani Rial',
          symbol_native: 'ر.ع.‏',
          decimal_digits: 3,
          rounding: 0,
          code: 'OMR',
          name_plural: 'Omani rials'
        },
        {
          symbol: 'B/.',
          name: 'Panamanian Balboa',
          symbol_native: 'B/.',
          decimal_digits: 2,
          rounding: 0,
          code: 'PAB',
          name_plural: 'Panamanian balboas'
        },
        {
          symbol: 'S/.',
          name: 'Peruvian Nuevo Sol',
          symbol_native: 'S/.',
          decimal_digits: 2,
          rounding: 0,
          code: 'PEN',
          name_plural: 'Peruvian nuevos soles'
        },
        {
          symbol: '₱',
          name: 'Philippine Peso',
          symbol_native: '₱',
          decimal_digits: 2,
          rounding: 0,
          code: 'PHP',
          name_plural: 'Philippine pesos'
        },
        {
          symbol: 'PKRs',
          name: 'Pakistani Rupee',
          symbol_native: '₨',
          decimal_digits: 0,
          rounding: 0,
          code: 'PKR',
          name_plural: 'Pakistani rupees'
        },
        {
          symbol: 'zł',
          name: 'Polish Zloty',
          symbol_native: 'zł',
          decimal_digits: 2,
          rounding: 0,
          code: 'PLN',
          name_plural: 'Polish zlotys'
        },
        {
          symbol: '₲',
          name: 'Paraguayan Guarani',
          symbol_native: '₲',
          decimal_digits: 0,
          rounding: 0,
          code: 'PYG',
          name_plural: 'Paraguayan guaranis'
        },
        {
          symbol: 'QR',
          name: 'Qatari Rial',
          symbol_native: 'ر.ق.‏',
          decimal_digits: 2,
          rounding: 0,
          code: 'QAR',
          name_plural: 'Qatari rials'
        },
        {
          symbol: 'RON',
          name: 'Romanian Leu',
          symbol_native: 'RON',
          decimal_digits: 2,
          rounding: 0,
          code: 'RON',
          name_plural: 'Romanian lei'
        },
        {
          symbol: 'din.',
          name: 'Serbian Dinar',
          symbol_native: 'дин.',
          decimal_digits: 0,
          rounding: 0,
          code: 'RSD',
          name_plural: 'Serbian dinars'
        },
        {
          symbol: 'RUB',
          name: 'Russian Ruble',
          symbol_native: '₽.',
          decimal_digits: 2,
          rounding: 0,
          code: 'RUB',
          name_plural: 'Russian rubles'
        },
        {
          symbol: 'RWF',
          name: 'Rwandan Franc',
          symbol_native: 'FR',
          decimal_digits: 0,
          rounding: 0,
          code: 'RWF',
          name_plural: 'Rwandan francs'
        },
        {
          symbol: 'SR',
          name: 'Saudi Riyal',
          symbol_native: 'ر.س.‏',
          decimal_digits: 2,
          rounding: 0,
          code: 'SAR',
          name_plural: 'Saudi riyals'
        },
        {
          symbol: 'SDG',
          name: 'Sudanese Pound',
          symbol_native: 'SDG',
          decimal_digits: 2,
          rounding: 0,
          code: 'SDG',
          name_plural: 'Sudanese pounds'
        },
        {
          symbol: 'Skr',
          name: 'Swedish Krona',
          symbol_native: 'kr',
          decimal_digits: 2,
          rounding: 0,
          code: 'SEK',
          name_plural: 'Swedish kronor'
        },
        {
          symbol: 'S$',
          name: 'Singapore Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'SGD',
          name_plural: 'Singapore dollars'
        },
        {
          symbol: 'Ssh',
          name: 'Somali Shilling',
          symbol_native: 'Ssh',
          decimal_digits: 0,
          rounding: 0,
          code: 'SOS',
          name_plural: 'Somali shillings'
        },
        {
          symbol: 'SY£',
          name: 'Syrian Pound',
          symbol_native: 'ل.س.‏',
          decimal_digits: 0,
          rounding: 0,
          code: 'SYP',
          name_plural: 'Syrian pounds'
        },
        {
          symbol: '฿',
          name: 'Thai Baht',
          symbol_native: '฿',
          decimal_digits: 2,
          rounding: 0,
          code: 'THB',
          name_plural: 'Thai baht'
        },
        {
          symbol: 'DT',
          name: 'Tunisian Dinar',
          symbol_native: 'د.ت.‏',
          decimal_digits: 3,
          rounding: 0,
          code: 'TND',
          name_plural: 'Tunisian dinars'
        },
        {
          symbol: 'T$',
          name: 'Tongan Paʻanga',
          symbol_native: 'T$',
          decimal_digits: 2,
          rounding: 0,
          code: 'TOP',
          name_plural: 'Tongan paʻanga'
        },
        {
          symbol: 'TL',
          name: 'Turkish Lira',
          symbol_native: 'TL',
          decimal_digits: 2,
          rounding: 0,
          code: 'TRY',
          name_plural: 'Turkish Lira'
        },
        {
          symbol: 'TT$',
          name: 'Trinidad and Tobago Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'TTD',
          name_plural: 'Trinidad and Tobago dollars'
        },
        {
          symbol: 'NT$',
          name: 'New Taiwan Dollar',
          symbol_native: 'NT$',
          decimal_digits: 2,
          rounding: 0,
          code: 'TWD',
          name_plural: 'New Taiwan dollars'
        },
        {
          symbol: 'TSh',
          name: 'Tanzanian Shilling',
          symbol_native: 'TSh',
          decimal_digits: 0,
          rounding: 0,
          code: 'TZS',
          name_plural: 'Tanzanian shillings'
        },
        {
          symbol: '₴',
          name: 'Ukrainian Hryvnia',
          symbol_native: '₴',
          decimal_digits: 2,
          rounding: 0,
          code: 'UAH',
          name_plural: 'Ukrainian hryvnias'
        },
        {
          symbol: 'USh',
          name: 'Ugandan Shilling',
          symbol_native: 'USh',
          decimal_digits: 0,
          rounding: 0,
          code: 'UGX',
          name_plural: 'Ugandan shillings'
        },
        {
          symbol: '$U',
          name: 'Uruguayan Peso',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'UYU',
          name_plural: 'Uruguayan pesos'
        },
        {
          symbol: 'UZS',
          name: 'Uzbekistan Som',
          symbol_native: 'UZS',
          decimal_digits: 0,
          rounding: 0,
          code: 'UZS',
          name_plural: 'Uzbekistan som'
        },
        {
          symbol: 'Bs.F.',
          name: 'Venezuelan Bolívar',
          symbol_native: 'Bs.F.',
          decimal_digits: 2,
          rounding: 0,
          code: 'VEF',
          name_plural: 'Venezuelan bolívars'
        },
        {
          symbol: '₫',
          name: 'Vietnamese Dong',
          symbol_native: '₫',
          decimal_digits: 0,
          rounding: 0,
          code: 'VND',
          name_plural: 'Vietnamese dong'
        },
        {
          symbol: 'FCFA',
          name: 'CFA Franc BEAC',
          symbol_native: 'FCFA',
          decimal_digits: 0,
          rounding: 0,
          code: 'XAF',
          name_plural: 'CFA francs BEAC'
        },
        {
          symbol: 'CFA',
          name: 'CFA Franc BCEAO',
          symbol_native: 'CFA',
          decimal_digits: 0,
          rounding: 0,
          code: 'XOF',
          name_plural: 'CFA francs BCEAO'
        },
        {
          symbol: 'YR',
          name: 'Yemeni Rial',
          symbol_native: 'ر.ي.‏',
          decimal_digits: 0,
          rounding: 0,
          code: 'YER',
          name_plural: 'Yemeni rials'
        },
        {
          symbol: 'R',
          name: 'South African Rand',
          symbol_native: 'R',
          decimal_digits: 2,
          rounding: 0,
          code: 'ZAR',
          name_plural: 'South African rand'
        },
        {
          symbol: 'ZK',
          name: 'Zambian Kwacha',
          symbol_native: 'ZK',
          decimal_digits: 0,
          rounding: 0,
          code: 'ZMK',
          name_plural: 'Zambian kwachas'
        },
        {
          symbol: 'ZWL$',
          name: 'Zimbabwean Dollar',
          symbol_native: 'ZWL$',
          decimal_digits: 0,
          rounding: 0,
          code: 'ZWL',
          name_plural: 'Zimbabwean Dollar'
        }
    ];
  }
}
