import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private httpClient: HttpClient) {
  }

  shortenUrl(sourceUrl: String, customHash: String) {
    let apiUrl = environment.apiUrl + '/shorten-url';

    if (customHash && customHash.length > 0) {
      apiUrl += "?custom-hash=" + customHash;
    }

    return this.httpClient.post(apiUrl, sourceUrl);
  }
}
