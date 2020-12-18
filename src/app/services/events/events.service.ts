import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private event = new Subject<any>();

  publish(title: string, payload: any) {
    this.event.next({ title, payload });
  }

  getObservable(): Subject<any> {
    return this.event;
  }
}
