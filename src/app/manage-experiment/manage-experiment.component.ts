import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { APIService } from '../services/api.service'
declare var $: any;

@Component({
  selector: 'app-manage-experiment',
  templateUrl: './manage-experiment.component.html',
  styleUrls: ['./manage-experiment.component.scss']
})
export class ManageExperimentComponent implements OnInit {

  faQuestionCircle=faQuestionCircle;



  constructor(private apiService:APIService) { }

  ngOnInit(): void {

      $(".activeButton").click(function()
       {
          var $row = $(this).closest("tr");
          var $text = $row.find(".expName").text();
          $(".activeExperiment").text("Active Experiment: " + $text);
          //$(".current_experiment").text("Subject taking Experiment: " + $text);
       });


    
  }

}
