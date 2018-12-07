import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mark-item',
  templateUrl: './mark-item.component.html',
  styleUrls: ['./mark-item.component.scss']
})
export class MarkItemComponent implements OnInit {


  @Input () mark;

  constructor() { }

  ngOnInit() {
  }

}
