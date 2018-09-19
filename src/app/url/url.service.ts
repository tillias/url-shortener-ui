import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private httpClient: HttpClient) {
  }

  shortenUrl(sourceUrl: String) {
    return this.httpClient.post('http://openjdk-app-url-shortener1.1d35.starter-us-east-1.openshiftapps.com/shorten-url', sourceUrl);
  }
}
