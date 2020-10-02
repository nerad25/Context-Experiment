import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateExperimentComponent } from './create-experiment.component';


const routes: Routes = [
    {
        path: '',
        component: CreateExperimentComponent,

    }
]
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateExperimentRoutingModule {}