import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { templateJitUrl } from '@angular/compiler';
import { expById } from '../models/expById';

export interface Exper {
  expID: any,
  timeLimit: any,
  experimentName: any,
  dateCreated: any
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  temp: Exper;

  getExpByIdUrl:string = 'http://localhost:8080/experiments';

  getExperiments()
  {
    var str = "Service Works";
    return str;
  }

  getExperimentsByTimeLimit()
  {
    this.http.get('localhost:8080/src/db/get-experiment-by-time-limit.js');
  }

  /*getExperimentById()
  {
    //const options = { params: new HttpParams().set('expID', '1') };
    //alert("Attempting to get database");
    //return this.http.get('http://localhost:8080/experiments').subscribe(result => {this.temp;});
   // .subscribe((result: Exper[]) => this.temp = { expID: (result as any)[0].expID, timeLimit: (result as any)[0].timeLimit,
   //    experimentName: (result as any)[0].experimentName, dateCreated: (result as any)[0].dateCreated });

    //var str = `ExpID: ${this.temp.expID}\nExpName: ${this.temp.experimentName}\nTime: ${this.temp.timeLimit}\nDate: ${this.temp.dateCreated}`;
   // return str;

  }*/

  getExperimentById():Observable<expById[]> {
    return this.http.get<expById[]>(`${this.getExpByIdUrl}`);
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
