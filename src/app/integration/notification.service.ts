import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Url} from "../model/url";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _sourceUrl: BehaviorSubject<Url> = new BehaviorSubject<Url>(null);
  public  sourceUrl$ = this._sourceUrl.asObservable();

  constructor() {
  }

  urlWasShortened(url: Url) {
    this._sourceUrl.next(url);
  }
}
