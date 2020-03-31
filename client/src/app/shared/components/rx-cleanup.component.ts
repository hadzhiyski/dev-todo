import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class RxCleanupComponent implements OnDestroy {
  protected componentDestroyed$ = new Subject();

  protected constructor() {
    const initialOnDestroy = this.ngOnDestroy;
    this.ngOnDestroy = () => {
      if (initialOnDestroy) {
        initialOnDestroy.apply(this);
      }
      this.componentDestroyed$.next();
      this.componentDestroyed$.complete();
    };
  }

  ngOnDestroy(): void {
    // empty - otherwise AOT removes it
  }
}
