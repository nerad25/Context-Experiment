import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.page';


const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            {
                path: '',
                redirectTo: 'experiment',
                pathMatch: 'full'
            },
            {
                path: 'experiment',
                loadChildren: () => import('../experiment/experiment.module').then(m => m.ExperimentModule),
            },
            {
                path: 'manage',
                loadChildren: () => import('../manage-experiment/manage-experiment.module').then(m => m.ManageExperimentModule),
            },
            {
                path: 'create',
                loadChildren: () => import('../create-experiment/create-experiment.module').then(m => m.CreateExperimentModule),
            },
        ]
    }
]
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule {}