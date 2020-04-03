import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RxCleanupComponent } from '@devtodo/shared/components';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends RxCleanupComponent {
  isHandset$ = this.layout.isHandset$.pipe(takeUntil(this.componentDestroyed$));
  loading$ = this.layout.loading$;

  constructor(private layout: LayoutService) {
    super();

    this.loading$.subscribe(console.log);
  }
}
