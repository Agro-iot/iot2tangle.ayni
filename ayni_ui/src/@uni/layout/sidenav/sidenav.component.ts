import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/@uni/services/navigation.service';
import { LayoutService } from 'src/@uni/services/layout.service';
import { trackByRoute } from 'src/@uni/utils/track-by';

@Component({
  selector: 'uni-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  items = this.navigationService.items;
  trackByRoute = trackByRoute;
  
  constructor(private navigationService: NavigationService,
    private layoutService: LayoutService) {
  }

  ngOnInit() {
  }

  onMouseEnter() {
    this.layoutService.collapseOpenSidenav();
  }

  onMouseLeave() {
    this.layoutService.collapseCloseSidenav();
  }
}
