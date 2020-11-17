import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';




export class ExperimentInstance {

  experimentName: string;

  isTimeLimit: boolean;
  timeLimit: Date;

  numItems: number;

  experimentItems: ExperimentItem[];
  

  constructor(experimentName: string, isTimeLimit: boolean, timeLimit: Date, numItems: number, experimentItems: ExperimentItem[]) {
    this.experimentName = experimentName;
    this.isTimeLimit = isTimeLimit;
    this.timeLimit = timeLimit;
    this.numItems = numItems;
    this.experimentItems = experimentItems;
  }
  
}


export class ExperimentItem {

  id: string;
  itemName: string;

  attribute1: string;
  attribute1Unit: string;

  attribute2: string;
  attribute2Unit: string;

  target: string;
  decoy: string;

  decoyUnavailable: boolean;

  itemInstances: itemInstance[];


  constructor(id: string, itemName: string, attribute1: string, attribute1Unit: string, attribute2: string, attribute2Unit: string, target: string, decoy: string, decoyUnavailable: boolean, itemInstances: itemInstance[]) {
    this.id = id;
    this.itemName = itemName;
    this.attribute1 = attribute1;
    this.attribute1Unit = attribute1Unit;
    this.attribute2 = attribute2;
    this.attribute2Unit = attribute2Unit;
    this.target = target;
    this.decoy = decoy;
    this.decoyUnavailable = decoyUnavailable
    this.itemInstances = itemInstances;
  }

}

export class itemInstance {

    letter: string;
    attribute1Value: string;
    attribute2Value: string;

    isDecoy: boolean;
    isSelectedDecoy: boolean;
    associatedTarget: string;

    isTarget: boolean;
    isSelectedTarget: boolean;
    associatedDecoy: string;

    constructor(letter: string, attribute1Value: string, attribute2Value: string, isDecoy: boolean, isSelectedDecoy: boolean, associatedTarget: string, isTarget: boolean, isSelectedTarget: boolean, associationDecoy: string) {
      this.letter = letter;
      this.attribute1Value = attribute1Value;
      this.attribute2Value = attribute2Value;
      this.isDecoy = isDecoy;
      this.isSelectedDecoy = isSelectedDecoy;
      this.associatedTarget = associatedTarget;
      this.isTarget = isTarget;
      this.isSelectedTarget = isSelectedTarget;
      this.associatedDecoy = associationDecoy;
    }
}


export enum EnumDecoy {
  DECOYA = 'decoya',
  DECOYB = 'decoyb'
}

@Component({
  selector: 'app-create-experiment',
  templateUrl: './create-experiment.component.html',
  styleUrls: ['./create-experiment.component.scss']
})


export class CreateExperimentComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  name = 'Angular';
  experimentInstanceForm: FormGroup;
  experimentItemsFormArray: FormArray;
  counter = 0;
  EnumDecoy = EnumDecoy;
  
  // experimentItems: ExperimentItem[];
  constructor() { 
    // this.experimentItems = [];
    this.experimentItemsFormArray = new FormArray([]);
  }
  


  ngOnInit(): void {
    this.experimentInstanceForm = new FormGroup({
      experimentName: new FormControl('', [Validators.required]),
      isTimeLimit: new FormControl(false),
      timeLimit: new FormControl(''),
      experimentItems: new FormArray([])
      // experimentItems: this.experimentItemsFormArray
    });
    
    // this.experimentInstanceForm.get('experimentName').valueChanges.subscribe(
    //   (val) => {
    //     console.log('experiment name', val);
    //   }
    // );

    // this.experimentInstanceForm.get('timeLimit').valueChanges.subscribe(
    //   (val) => {
    //     console.log('time limit', val);
    //   }
    // );

    // this.experimentInstanceForm.get('isTimeLimit').valueChanges.subscribe(
    //   (val) => {
    //     console.log('isTimeLimit', val);
    //   }
    // );

    // this.experimentInstanceForm.get('experimentItems').valueChanges.subscribe(
    //   (val) => {
    //     console.log(val);

    //   }
    // );
  
  }

  onReset() {
    while (this.experimentItems.length !== 0) {
      this.experimentItems.removeAt(0)
    }
    this.experimentInstanceForm.reset();
  }
  
  onSelectThisDecoy(decoy: EnumDecoy, index: number) {

    const item = _.find<FormGroup>(this.experimentItems.controls, (control, i) => {
      return i === index;
    });

    switch (decoy) {
      case EnumDecoy.DECOYA:
        item.get('decoyBSelected').setValue(false);
        break;
      case EnumDecoy.DECOYB:
        item.get('decoyASelected').setValue(false);
        break;
    }
  }

  onDelete(index: number) {
    this.experimentItems.removeAt(index);
  }

  cloneQuestion() {
    console.log(uuid());
    let experimentItem = new ExperimentItem(uuid(), '', '', '', '', '', '', '', false, []);
    
    this.counter++
    let formGroup = new FormGroup({
      id: new FormControl(experimentItem.id),
      itemName: new FormControl(experimentItem.itemName, Validators.required),
      attribute1: new FormControl(experimentItem.attribute1, Validators.required),
      attribute1Unit: new FormControl(experimentItem.attribute1Unit, Validators.required),
      attribute2: new FormControl(experimentItem.attribute2),
      attribute2Unit: new FormControl(experimentItem.attribute2Unit, Validators.required),
      attribute1A: new FormControl('', Validators.required),
      attribute2A: new FormControl('', Validators.required),
      attribute1B: new FormControl('', Validators.required),
      attribute2B: new FormControl('', Validators.required),
      decoyAAttribute1: new FormControl('', Validators.required),
      decoyAAttribute2: new FormControl('', Validators.required),
      decoyASelected: new FormControl(false),
      decoyBAttribute1: new FormControl('', Validators.required),
      decoyBAttribute2: new FormControl('', Validators.required),
      decoyBSelected: new FormControl(false),
      target: new FormControl(''),
      decoyUnavailable: new FormControl(experimentItem.decoyUnavailable),
      
    });
    this.experimentItemsFormArray.push(formGroup);
    // console.log(this.experimentItemsFormArray.controls[0].get('id').value);
    // this.experimentInstanceForm.get('experimentItems').patchValue(this.experimentItemsFormArray);
    this.experimentItems.push(formGroup);
    console.log(this.experimentItems);
  }

  get experimentItems(): FormArray {
    return this.experimentInstanceForm.get('experimentItems') as FormArray;
  }


  onSave() {
    if (this.experimentInstanceForm.valid) {
      console.log('true');
      console.log(this.experimentInstanceForm.value);
    } else {
      console.log('false')
    }
    // this.experimentItems.controls.forEach((control) => {
    //   console.log(control.get('itemName').value);
    //   let decoyA = control.get('decoyASelected').value;

    //   control.get('target').setValue(decoyA ? 'A' : 'B');

    // });


    // this.experimentItems.controls.forEach((control) => {
    //   console.log(`item name: ${control.get('itemName').value} target: ${control.get('target').value}`);
    // });
  }
}
