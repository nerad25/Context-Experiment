import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperimentComponent } from './experiment.component';
import { InstructionsPageComponent } from '../instructions-page/instructions-page.component';
import { DemoCollectionComponent } from '../demo-collection/demo-collection.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RunningExperimentComponent } from '../running-experiment/running-experiment.component';
import { ExperimentEditorComponent } from '../experiment-editor/experiment-editor.component';
import { CreateExperimentComponent} from '../create-experiment/create-experiment.component';
import { InformationVerificationComponent } from '../information-verification/information-verification.component';
import { SubmitDataComponent} from '../submit-data/submit-data.component';

const routes: Routes = [
    {
        path: '',
        component: ExperimentComponent,
        children: [
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full',
            },
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: 'instructions',
                component: InstructionsPageComponent
            },
            {
                path: 'information-collection',
                component: DemoCollectionComponent
            },
            {
                path: 'running-experiment',
                component: RunningExperimentComponent
            },
            {
                path: 'Experiment-Editor',
                component: ExperimentEditorComponent
            },
            {
                path: 'create',
                component: CreateExperimentComponent
            },
            {
                path: 'information-verification',
                component: InformationVerificationComponent
            },
            {
                path: 'submit-data',
                component: SubmitDataComponent
            }
        ]
    }
]
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExperimentRoutingModule {}