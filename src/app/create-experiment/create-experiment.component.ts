import { Component, OnInit, ElementRef, TemplateRef, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-create-experiment',
  templateUrl: './create-experiment.component.html',
  styleUrls: ['./create-experiment.component.scss']
})
export class CreateExperimentComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faQuestionCircle = faQuestionCircle;
  currNumItems = 1;
  
  name = 'Angular';
  @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer: ViewContainerRef;
  @ViewChild('template') template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  cloneQuestion() {
    const template = this.template.createEmbeddedView(null);
    this.viewContainer.insert(template);
    this.currNumItems++;
  }

  resetQuestions()
  {
    const template = this.template.createEmbeddedView(null);
    this.viewContainer.clear();
    this.currNumItems = 1;
  }

}
