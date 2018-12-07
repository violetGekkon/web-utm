import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {Validators} from '@angular/forms';


enum docType {
  'Накладная ГОЗНАК' = 6,
  'Товарно-транспортная накладная ' = 7,
  'Акт разногласий на полное согласие ' = 8,
  'Отчет о производстве ' = 9,
  'Подтверждение акта разногласий ' = 10,
  'Акт разногласий ' = 14,
  'Акт разногласий на полный отказ ' = 15,
  'Запрос отмены акта разногласий ' = 16,
  'Подтвержденеие отмены акта разногласий ' = 17,
  'Акт списания с баланса ' = 19,
  'Акт постановки на баланс ' = 20,
  'Отчет об импорте ' = 22,
  'Отмена проведения акта списания ' = 24,
  'Отмена проведения акта постановки на баланс ' = 25,
  'Отмена проведения отчета о производстве ' = 26,
  'Отмена проведения отчета об импорте ' = 27
}


@Component({
  selector: 'app-mark-history-page',
  templateUrl: './mark-history-page.component.html',
  styleUrls: ['./mark-history-page.component.scss']
})
export class MarkHistoryPageComponent implements OnInit {

  visible = false;
  expandEnabled = false;

  markForm: FormGroup;
  bar = '';
  response = [];

  docType: typeof docType = docType;

  markHistoryEntries = [];

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

  queryHistoryBCode() {
    this.dataService.getMarkHistory(this.bar).subscribe(
      (data: any) => {
        this.response = data.history.toString().split(',').reverse();
        this.response.forEach((value, index) => {
          const item = value.split(':');
          const doc = this.docType[item[0]];
          const docDate = item[3];
          let content = 'Номер ЕГАИС №' + item[1] + ' (внутренний  номер №' + item[2] + '). ';
          if (index === 0) {
            content = content + 'Поставщик - ' + item[4] + '.' + 'Получатель - ' + item[5] + '.';
          } else if (index === 1) {
            content = content + 'Владелец - ' + item[4] + '. Идентификационный номер Формы 2: ' + item[5];
          } else {
            content = content + 'Поставщик - ' + item[4] + '. Получатель - ' + item[5] + '. Идентификационный номер Формы 2: ' + item[6];
          }

          const markHistoryItem = {doc: doc, docDate: docDate, content: content};
          this.markHistoryEntries.push(markHistoryItem);
          this.visible = true;
        });
      }
    );
  }


  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  //
  // onExpandEntry(expanded, index) {
  //   console.log(`Expand status of entry #${index} changed to ${expanded}`);
  // }


}
