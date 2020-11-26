import { Component, Renderer2, Inject } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { NavigationService } from 'src/@uni/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ayni- Project';

  constructor(private navigationService: NavigationService,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document) {

      if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }
    
      this.navigationService.items = [
      {
        type: 'link',
        label: 'Home',
        route: '/inicio/home',
      },
      {
        type: 'link',
        label: 'Sensors',
        route: '/inicio/plan-production',
      }, 
    ];
  }

}