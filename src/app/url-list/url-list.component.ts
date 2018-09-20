import {Component, OnInit} from '@angular/core';
import {UrlListService} from "./url-list.service";
import {Url} from "../model/url";
import {NotificationService} from "../integration/notification.service";

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

  urls: Url[];

  constructor(private urlListService: UrlListService, private notificationService: NotificationService) {
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
}
