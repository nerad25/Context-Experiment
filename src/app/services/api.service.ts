import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor() { }

  getExperiments()
  {
    var str = "Service Works";
    return str;
  }

}
