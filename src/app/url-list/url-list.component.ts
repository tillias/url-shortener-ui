import {Component, OnInit} from '@angular/core';
import {UrlListService} from "./url-list.service";
import {Url} from "../model/url";
import {NotificationService} from "../integration/notification.service";
import {environment} from "../../environments/environment";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ConfirmationDialogComponent} from "../common/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent implements OnInit {

  urls: Url[];

  constructor(private urlListService: UrlListService, private notificationService: NotificationService,
              private snackBar: MatSnackBar, private dialog: MatDialog) {
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
    });
  }

  loadUrls() {
    this.urlListService.getUrls().subscribe((data: Url[]) => {
        this.urls = data;
        console.log(this.urls);
      },
      (error) => {
        this.snackBarMessage('Error loading urls list: ' + error.message);
      });
  }

  removeUrl(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Delete url',
        text: 'Do you really want to delete url?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doRemove(id);
      }
    });
  }

  doRemove(id: string) {
    this.urlListService.deleteUrl(id).subscribe(() => {
        this.snackBarMessage('Url has been deleted');
        this.loadUrls();
      },
      (error) => {
        this.snackBarMessage('Error deleting url: ' + error.message);
      });
  }

  snackBarMessage(message: string) {
    this.snackBar.open(message, null, {
      duration: 3000,
    });
  }
}
