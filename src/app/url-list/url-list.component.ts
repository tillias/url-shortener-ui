import {Component, OnInit} from '@angular/core';
import {UrlListService} from "./url-list.service";
import {Url} from "../model/url";

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

  urls: Url[];

  constructor(private urlListService: UrlListService) {
  }

  ngOnInit() {
    this.urlListService.getUrls().subscribe((data: Url[]) => {
      this.urls = data;
      console.log(this.urls);
    });

  }

}
