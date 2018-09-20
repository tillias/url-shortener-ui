import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private httpClient: HttpClient) {
  }

  shortenUrl(sourceUrl: String) {
    return this.httpClient.post(environment.apiUrl + '/shorten-url', sourceUrl);
  }
}
