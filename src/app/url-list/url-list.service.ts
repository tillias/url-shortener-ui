import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Url} from "../model/url";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UrlListService {

  constructor(private httpClient: HttpClient) {
  }

  getUrls(): Observable<Url[]> {
    return this.httpClient.get<Url[]>(environment.apiUrl + '/url');
  }
}
