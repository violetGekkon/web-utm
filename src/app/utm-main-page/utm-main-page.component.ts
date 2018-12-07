import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-utm-main-page',
  templateUrl: './utm-main-page.component.html',
  styleUrls: ['./utm-main-page.component.scss']
})
export class UtmMainPageComponent {

routeLinks = [
      {
        label: 'Главная',
        path: './home',
        index: 0
      },
      {
        label: 'Сертификаты',
        path: './certificate',
        index: 1
      },
      {
        label: 'XML схемы',
        path: './scheme',
        index: 2
      },
      {
        label: 'История',
        path: './history',
        index: 3
      },
      // path: './product4',
    ];


  // ngOnInit(): void {
  //   this.router.events.subscribe((res) => {
  //     this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.path === '.' + this.router.url));
  //   });
  // }

}
