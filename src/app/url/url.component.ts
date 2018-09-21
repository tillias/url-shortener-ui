import {Component, OnInit} from '@angular/core';
import {UrlService} from "./url.service";
import {NotificationService} from "../integration/notification.service";
import {Url} from "../model/url";

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  constructor(private urlService: UrlService, private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  shortenUrl(sourceUrl: string, customHash: string) {
    this.urlService.shortenUrl(sourceUrl, customHash).subscribe((response: Url) => {
      console.log(response);
      this.notificationService.urlWasShortened(response);
    });
  }
}
