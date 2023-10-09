import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _snackbar: MatSnackBar, private update: SwUpdate) {}

  ngOnInit() {
    this.update.versionUpdates
      .pipe(
        filter((x) => x.type === 'VERSION_READY'),
        switchMap((x) => {
          return this._snackbar
            .open('A new version of the application is available', 'Upgrade')
            .afterDismissed();
        }),
        filter((x) => x.dismissedByAction),
        map((x) => {
          return this.update.activateUpdate();
        })
      )
      .subscribe((res) => {
        window.location.reload();
      });
  }
}
