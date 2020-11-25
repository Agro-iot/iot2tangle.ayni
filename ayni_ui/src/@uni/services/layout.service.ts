import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _sidenavOpenSubject = new BehaviorSubject<boolean>(false);
  sidenavOpen$ = this._sidenavOpenSubject.asObservable();

  private _sidenavCollapsedSubject = new BehaviorSubject<boolean>(false);
  sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();

  private _sidenavCollapsedOpenSubject = new BehaviorSubject<boolean>(false);
  sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
  
  constructor() { }

  openSidenav() {
    this._sidenavOpenSubject.next(true);
  }

  closeSidenav() {
    this._sidenavOpenSubject.next(false);
  }

  collapseSidenav() {
    this._sidenavCollapsedSubject.next(true);
  }

  expandSidenav() {
    this._sidenavCollapsedSubject.next(false);
  }

  collapseOpenSidenav() {
    this._sidenavCollapsedOpenSubject.next(true);
  }

  collapseCloseSidenav() {
    this._sidenavCollapsedOpenSubject.next(false);
  }

}
