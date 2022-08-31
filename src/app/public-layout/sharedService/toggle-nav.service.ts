import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleNavService {
  message: string | undefined;
  message2: string | undefined;
  message3: string | undefined;
  message4: string | undefined;

  private subject = new Subject<any>();

  constructor() {}

  setMessage(data: any) {
    this.message = data;
  }

  getMessage() {
    return this.message;
  }

  //
  setSubMessage(data: any) {
    this.message2 = data;
  }

  getSubMessage() {
    return this.message2;
  }

  //
  setContentMessage(data: any) {
    this.message3 = data;
  }

  getContentMessage() {
    return this.message3;
  }

  //
  setNextPrevMessage(data: any) {
    this.message4 = data;
  }

  getNextPrevMessage() {
    return this.message4;
  }

  sendClickEvent() {
    this.subject.next(null);
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
