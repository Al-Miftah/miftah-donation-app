import { AppConfig } from '../../app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  public get(url: string, data: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(url, data).subscribe(
        (resp) => {
          resolve(resp);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  public post(url: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(url, data).subscribe(
        (resp) => {
          resolve(resp);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  public put(url: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(url, data).subscribe(
        (resp) => {
          resolve(resp);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  public patch(url: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.patch(url, data).subscribe(
        (resp) => {
          resolve(resp);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
