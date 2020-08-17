import { NgModule } from "@angular/core";
import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutingModule } from './experiment-routing.module';
import { InstructionsPageComponent } from '../instructions-page/instructions-page.component';
import { DemoCollectionComponent } from '../demo-collection/demo-collection.component';
import { RunningExperimentComponent } from '../running-experiment/running-experiment.component';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';

@NgModule({
    declarations: [ExperimentComponent, WelcomeComponent, InstructionsPageComponent, DemoCollectionComponent, RunningExperimentComponent],
    imports: [CommonModule, ExperimentRoutingModule],
})
export class ExperimentModule {}