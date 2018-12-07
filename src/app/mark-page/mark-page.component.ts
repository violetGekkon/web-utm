import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-mark-page',
  templateUrl: './mark-page.component.html',
  styleUrls: ['./mark-page.component.scss']
})


export class MarkPageComponent implements OnInit {

  markForm: FormGroup;
  bar = '';
  bars = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {
  }

  ngOnInit() {
    this.markForm = this.fb.group({
      markValue: [null, [
        Validators.required,
        Validators.pattern('^([1-9]\\d{2}|\\d([1-9]\\d|\\d[1-9])){2}([1-9]\\d{7}|\\d([1-9]\\d{6}|\\d([1-9]\\d{5}|\\d([1-9]\\d{4}|\\d([1-9]\\d{3}|\\d([1-9]\\d{2}|\\d([1-9]\\d|\\d[1-9])))))))(0[1-9]|1[0-2])(1[8-9]|[2-9][0-9])([1-9]\\d{2}|\\d([1-9]\\d|\\d[1-9]))[0-9A-Z]{129}|\\d\\d[a-zA-Z0-9]{21}\\d[0-1]\\d[0-3]\\d{10}[a-zA-Z0-9]{31}|[0-9]{40}$')
      ]]
    });
  }

  get markValue() {
    return this.markForm.get('markValue');
  }

  checkMark() {

    this.dataService.getMarkStatus(this.bar).subscribe(
      (data: any) => {
        // console.log(data);
        const result = +data.result;
        let state;
        let color;
        if (result === 0) {
          state = 'check';
          color = 'lite-green';
        } else {
          state = 'clear';
          color = 'lite-red';
        }
        const mark = {value: data.code.substr(0, 80), state: state, color: color};
        this.bars.push(mark);
      }
    );
  }

}
