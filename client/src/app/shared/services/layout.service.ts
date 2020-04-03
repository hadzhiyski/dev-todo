import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, delay, skip, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private loading = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) { }

  loading$ = this.loading.asObservable().pipe(skip(1), delay(0));

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  setLoading(value: boolean) {
    this.loading.next(value);
  }
}
