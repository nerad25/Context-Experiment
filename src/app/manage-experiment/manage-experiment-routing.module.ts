import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageExperimentComponent } from './manage-experiment.component';


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