import {Component, OnInit} from '@angular/core';
import {UrlService} from "./url.service";
import {NotificationService} from "../integration/notification.service";
import {Url} from "../model/url";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {

  constructor(private urlService: UrlService, private notificationService: NotificationService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  shortenUrl(sourceUrl: string, customHash: string) {
    this.urlService.shortenUrl(sourceUrl, customHash).subscribe((response: Url) => {
      this.snackBar.open('Url has been shortened', null, {
        duration: 3000,
      });

      console.log(response);
      this.notificationService.urlWasShortened(response);
    });
  }
}
