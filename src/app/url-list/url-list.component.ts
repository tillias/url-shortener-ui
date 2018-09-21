import {Component, OnInit} from '@angular/core';
import {UrlListService} from "./url-list.service";
import {Url} from "../model/url";
import {NotificationService} from "../integration/notification.service";
import {environment} from "../../environments/environment";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent implements OnInit {

  urls: Url[];

  constructor(private urlListService: UrlListService, private notificationService: NotificationService, private snackBar: MatSnackBar) {
  }

  apiUrl() {
    return environment.apiUrl;
  }

  ngOnInit() {
    this.loadUrls();

    this.notificationService.sourceUrl$.subscribe((url) => {
      if (url != null) {
        this.loadUrls();
      }
    })
  }

  loadUrls() {
    this.urlListService.getUrls().subscribe((data: Url[]) => {
      this.urls = data;
      console.log(this.urls);
    });
  }

  removeUrl(id: string) {
    this.urlListService.deleteUrl(id).subscribe(() => {
      this.snackBar.open('Url has been deleted', null, {
        duration: 3000,
      });
      this.loadUrls();
    })
  }
}
