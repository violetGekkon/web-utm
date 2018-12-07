import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getInfo(): any {
    return this.httpClient.get('http://10.0.59.171:8080/api/info');
  }

  getMarkStatus(mark: any) {
    const params = new HttpParams().set('code', mark);
    return this.httpClient.get('http://10.0.59.171:8080/api/mark', {params: params});
  }

  getMarkHistory(mark: any) {
    const params = new HttpParams().set('code', mark);
    return this.httpClient.get('http://10.0.59.171:8080/api/mark/history', {params: params});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Произошла ошибка:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Код ответа ${error.status}, ` +
        `Содержимое : ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Что-то пошло не так; попробуйте позже.');
  }
}
