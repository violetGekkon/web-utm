import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  // info = [{'icon': '123', 'key': '345', 'value': '789'}];
  info = [];

  ngOnInit() {
    this.dataService.getInfo().subscribe(info => this.info = info.info);
  }

}
