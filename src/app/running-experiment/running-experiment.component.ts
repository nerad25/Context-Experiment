import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-running-experiment',
  templateUrl: './running-experiment.component.html',
  styleUrls: ['./running-experiment.component.scss']
})
export class RunningExperimentComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
