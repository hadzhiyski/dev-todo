import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RxCleanupComponent } from '@devtodo/shared/components';
import { fromEvent, Observable } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends RxCleanupComponent implements AfterViewInit {
  @ViewChild('mainContent')
  mainContent: ElementRef;

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {
    super();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      takeUntil(this.componentDestroyed$),
      map(result => result.matches),
      shareReplay()
    );

  ngAfterViewInit(): void {
    fromEvent(this.mainContent.nativeElement, 'click')
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(() => {
        this.sidenav.close();
      });
  }
}
