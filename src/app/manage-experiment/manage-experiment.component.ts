import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { APIService } from '../services/api.service';
import { expById } from '../models/expById';
import { tableData } from '../models/tableData';
import { updateActiveExp } from '../models/updateActiveExp';
import { activeExp } from '../models/activeExp';

declare var $: any;


@Component({
  selector: 'app-manage-experiment',
  templateUrl: './manage-experiment.component.html',
  styleUrls: ['./manage-experiment.component.scss']
})

export class ManageExperimentComponent implements OnInit {

  faQuestionCircle=faQuestionCircle;

  tableData:tableData[];
  activeExper:activeExp = {expID: 0, experimentName: ""};
  tempActiveExp: updateActiveExp = {expID: 0, isActive: 0};
  currActiveExp: updateActiveExp = {expID: 0, isActive: 0};

  


  constructor(private apiService:APIService) { }
  

  ngOnInit() {
       this.apiService.getTableData().subscribe(data => {
         this.tableData = data;
       });

       this.apiService.getActiveExperiment().subscribe(data => {
          this.activeExper = data[0];
       });

       //$(".activeButton").click(function()
       //{
       //   var $row = $(this).closest("tr");
       //   var $text = $row.find(".expName").text();
       //   $(".activeExperiment").text("Active Experiment: " + $text);
          //$(".current_experiment").text("Subject taking Experiment: " + $text);
       //});
  }


  activeClick(exper)
  {
    $(".activeExperiment").text("Active Experiment: " + exper.experimentName);
    this.tempActiveExp.isActive = 1;
    this.tempActiveExp.expID = exper.expID;
    this.currActiveExp.isActive = 0;
    this.currActiveExp.expID = this.activeExper.expID;
    this.apiService.updateActive(this.currActiveExp).subscribe(data => console.log(data));
    this.apiService.updateActive(this.tempActiveExp).subscribe(data => console.log(data));
    this.activeExper.expID = exper.expID;
    this.activeExper.experimentName = exper.experimentName;
  }

}
