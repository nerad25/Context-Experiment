import { NgModule } from "@angular/core";
import { ManageExperimentComponent } from './manage-experiment.component';
import { ManageExperimentRoutingModule } from './manage-experiment-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ManageExperimentComponent],
    imports: [CommonModule, ManageExperimentRoutingModule, FontAwesomeModule],
})
export class ManageExperimentModule {}