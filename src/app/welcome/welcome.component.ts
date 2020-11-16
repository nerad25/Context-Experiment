import { Component, OnInit } from '@angular/core';
import { activeExp } from '../models/activeExp';
import { APIService } from '../services/api.service';

declare var $: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  activeExperiment: activeExp;

  constructor(private apiService:APIService) { }

  ngOnInit(): void {
    this.apiService.getActiveExperiment().subscribe(data => {
      this.activeExperiment = data[0];
    });
  }
}
