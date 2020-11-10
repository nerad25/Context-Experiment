import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { APIService } from '../services/api.service';
import { expById } from '../models/expById';

declare var $: any;


@Component({
  selector: 'app-manage-experiment',
  templateUrl: './manage-experiment.component.html',
  styleUrls: ['./manage-experiment.component.scss']
})

export class ManageExperimentComponent implements OnInit {

  faQuestionCircle=faQuestionCircle;

  expByIds:expById[];

  


  constructor(private apiService:APIService) { }
  

  ngOnInit() {

      $(".activeButton").click(function()
       {
          var $row = $(this).closest("tr");
          var $text = $row.find(".expName").text();
          $(".activeExperiment").text("Active Experiment: " + $text);
          //$(".current_experiment").text("Subject taking Experiment: " + $text);
       });


    
  }

  getExperiments()
  {
  //  var str = this.apiService.getExperiments();
  //  alert(str);
  }

  getExperimentByID()
  {
    this.apiService.getExperimentById().subscribe(expByIds => {
      this.expByIds = expByIds;
      alert("Data is: " + expByIds + "\n\nNumber of experiments in database: " + expByIds.length) }
      );

    //alert( this.apiService.getExperimentById() );
  }

}
