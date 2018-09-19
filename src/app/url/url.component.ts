import {Component, OnInit} from '@angular/core';
import {UrlService} from "./url.service";

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  constructor(private urlService: UrlService) {
  }

  ngOnInit() {
  }

  shortenUrl() {
    let sourceUrl = 'http://test.foo/1';
    this.urlService.shortenUrl(sourceUrl).subscribe((response) => {
      console.log(response);
    });
  }
}
