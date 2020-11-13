import { Component, OnInit, ElementRef, TemplateRef, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { Form } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';

export class Category {
  values: string[];
}

export class ExperimentItem {

  // decoy: Decoy[];
  // name: string;
  // categories: Category[];
  // constructor(name: string, categories: Category[]) {
  constructor() {
    // this.name = name;
    // this.categories = categories;
  }
}

@Component({
  selector: 'app-create-experiment',
  templateUrl: './create-experiment.component.html',
  styleUrls: ['./create-experiment.component.scss']
})
export class CreateExperimentComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faQuestionCircle = faQuestionCircle;
  // currNumItems = 1;
  experimentItems: ExperimentItem[];
  
  name = 'Angular';
  // @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer: ViewContainerRef;
  // @ViewChild('template') template: TemplateRef<any>;

  constructor() { 
    this.experimentItems = [];
  }

  ngOnInit(): void {
  }

  onDelete(index: number) {
    this.experimentItems = _.filter(this.experimentItems, (item: ExperimentItem, i: number) => {
      return i !== index;
    });
  }

  cloneQuestion() {
    this.experimentItems.push(new ExperimentItem());
    // const template = this.template.createEmbeddedView(null);
    // this.viewContainer.insert(template);
    // this.currNumItems++;
  }

  resetQuestions()
  {
    // const template = this.template.createEmbeddedView(null);
    // this.viewContainer.clear();
    // this.currNumItems = 1;
    this.experimentItems = [];
  }

}
