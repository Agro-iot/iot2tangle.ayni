import { Component, OnInit, Input, TemplateRef, ViewChild, ChangeDetectorRef, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSidenavContainer, MatSidenav } from '@angular/material/sidenav';
import { map, filter, withLatestFrom } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LayoutService } from '../services/layout.service';
import { Event, Router, NavigationEnd, Scroll } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'uni-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  @Input() sidenavRef: TemplateRef<any>;
  @Input() toolbarRef: TemplateRef<any>;

  activeOpened = false;
  isDesktop$ = this.breakpointObserver.observe('(min-width: 1280px)').pipe(
    map(state => state.matches)
  );

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  @ViewChild(MatSidenavContainer, { static: true }) sidenavContainer: MatSidenavContainer;

  constructor(private cd: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private layoutService: LayoutService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    
    this.layoutService.sidenavOpen$.pipe(
      untilDestroyed(this)
    ).subscribe(open => open ? this.sidenav.open() : this.sidenav.close());

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      withLatestFrom(this.isDesktop$),
      filter(([event, matches]) => !matches),
      untilDestroyed(this)
    ).subscribe(() => this.sidenav.close());

  }

  ngOnDestroy(): void { }

}
