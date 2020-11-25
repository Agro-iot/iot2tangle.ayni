import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LayoutService } from 'src/@uni/services/layout.service';

@Component({
  selector: 'app-ayni-layout',
  templateUrl: './ayni-layout.component.html',
  styleUrls: ['./ayni-layout.component.scss']
})
export class AyniLayoutComponent implements OnInit, OnDestroy {

  sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
  isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px )`).pipe(
    map(state => state.matches)
  );
  
  constructor(private layoutService: LayoutService,
    private breakpointObserver: BreakpointObserver,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {}
}
