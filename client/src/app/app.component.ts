import { Component } from '@angular/core';
import { RxCleanupComponent } from '@devtodo/shared/components';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends RxCleanupComponent {
  constructor(private layout: LayoutService) {
    super();
  }

  isHandset$ = this.layout.isHandset$.pipe(takeUntil(this.componentDestroyed$));
}
