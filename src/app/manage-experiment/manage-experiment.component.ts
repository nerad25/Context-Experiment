import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-experiment',
  templateUrl: './manage-experiment.component.html',
  styleUrls: ['./manage-experiment.component.scss']
})
export class ManageExperimentComponent implements OnInit {

  faQuestionCircle=faQuestionCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
