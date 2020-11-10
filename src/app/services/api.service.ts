import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { templateJitUrl } from '@angular/compiler';

export interface Exper {
  expID: any,
  timeLimit: any,
  experimentName: any,
  dateCreated: any
}

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  temp: Exper;

  getExperiments()
  {
    var str = "Service Works";
    return str;
  }

  getExperimentsByTimeLimit()
  {
    this.http.get('localhost:8080/src/db/get-experiment-by-time-limit.js');
  }

  getExperimentById()
  {
    //const options = { params: new HttpParams().set('expID', '1') };
    return this.http.get('localhost:8080/experiments').subscribe(result => this.temp);
   // .subscribe((result: Exper[]) => this.temp = { expID: (result as any)[0].expID, timeLimit: (result as any)[0].timeLimit,
   //    experimentName: (result as any)[0].experimentName, dateCreated: (result as any)[0].dateCreated });

    //var str = `ExpID: ${this.temp.expID}\nExpName: ${this.temp.experimentName}\nTime: ${this.temp.timeLimit}\nDate: ${this.temp.dateCreated}`;
   // return str;
  }

  getAllSubjects()
  {

  }

  getAllUsers()
  {

  }

  getAllQuestions()
  {

  }

  getAllOptions()
  {

  }

  getAllAnswers()
  {

  }

  getNumParticipantsByExpID()
  {

  }

  getDateCreatedByID()
  {

  }

  getTableData()
  {

  }
}
