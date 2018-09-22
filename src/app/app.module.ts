import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UrlComponent} from './url/url.component';
import {UrlListComponent} from './url-list/url-list.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule,
  MatTooltipModule
} from "@angular/material";
import {ConfirmationDialogComponent} from './common/confirmation-dialog/confirmation-dialog.component';
import {NotificationDialogComponent} from './common/notification-dialog/notification-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UrlComponent,
    UrlListComponent,
    ConfirmationDialogComponent,
    NotificationDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent, NotificationDialogComponent]
})
export class AppModule {
}
