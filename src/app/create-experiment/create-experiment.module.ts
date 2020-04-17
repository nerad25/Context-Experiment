import { NgModule } from "@angular/core";
import { CreateExperimentComponent } from './create-experiment.component';
import { CreateExperimentRoutingModule } from './create-experiment-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CreateExperimentComponent],
    imports: [CommonModule, CreateExperimentRoutingModule, FontAwesomeModule],
})
export class CreateExperimentModule {}