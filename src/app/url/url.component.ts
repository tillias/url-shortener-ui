import {Component, OnInit} from '@angular/core';
import {UrlService} from "./url.service";
import {NotificationService} from "../integration/notification.service";
import {Url} from "../model/url";
import {MatSnackBar} from "@angular/material";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidateUrl} from "../validators/url.validator";

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {

  sourceUrl = new FormControl('', [Validators.required, ValidateUrl]);
  customHash = new FormControl('');

  urlForm = new FormGroup({
    sourceUrl: this.sourceUrl,
    customHash: this.customHash,
  });

  constructor(private urlService: UrlService, private notificationService: NotificationService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  shortenUrl() {
    this.urlService.shortenUrl(this.sourceUrl.value, this.customHash.value).subscribe((response: Url) => {
      this.snackBar.open('Url has been shortened', null, {
        duration: 3000,
      });

      console.log(response);
      this.notificationService.urlWasShortened(response);
    }, (error) => {
      this.snackBar.open('Error shortening url: ' + error.message, null, {
        duration: 3000,
      });
    });
  }
}
