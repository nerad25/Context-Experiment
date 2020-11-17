import { NgModule } from "@angular/core";
import { CreateExperimentComponent } from './create-experiment.component';
import { CreateExperimentRoutingModule } from './create-experiment-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [CreateExperimentComponent],
    imports: [
        CommonModule,
        CreateExperimentRoutingModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
    ],
})
export class CreateExperimentModule {}