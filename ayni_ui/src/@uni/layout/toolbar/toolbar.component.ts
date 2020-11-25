import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from 'src/@uni/services/navigation.service';
import { LayoutService } from 'src/@uni/services/layout.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'uni-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() mobileQuery: boolean;
  
  navigationItems = this.navigationService.items;

  constructor(private layoutService: LayoutService,
    private navigationService: NavigationService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  openSidenav() {
    this.layoutService.openSidenav();
  }

  logout(event: Event) {
    event.preventDefault()
    //this.authService.logout()
    this.router.navigate(['/login'])
  }

}
