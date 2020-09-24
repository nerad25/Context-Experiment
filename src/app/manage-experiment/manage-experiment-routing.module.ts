import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageExperimentComponent } from './manage-experiment.component';
import {CreateExperimentComponent} from '../create-experiment/create-experiment.component';


const routes: Routes = [
    {
        path: '',
        component: ManageExperimentComponent,
    }
]
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageExperimentRoutingModule {}