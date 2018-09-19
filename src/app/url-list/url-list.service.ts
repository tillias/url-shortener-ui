import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Url} from "../model/url";

@Injectable({
  providedIn: 'root'
})
export class UrlListService {

  bathPath = 'http://openjdk-app-url-shortener1.1d35.starter-us-east-1.openshiftapps.com';
  apiPath = "url";

  constructor(private httpClient: HttpClient) {
  }

  getUrls(): Observable<Url[]> {
    return this.httpClient.get<Url[]>(this.bathPath + '/' + this.apiPath);
  }
}
