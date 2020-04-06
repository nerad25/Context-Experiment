import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.page';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentComponent } from './experiment/experiment.component';
import { CreateExperimentComponent } from './create-experiment/create-experiment.component';
import { ManageExperimentComponent } from './manage-experiment/manage-experiment.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RunningExperimentComponent } from './running-experiment/running-experiment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full',
      },
      {
        path: 'intro',
        component: ExperimentComponent
      },
      {
        path: 'manage',
        component: ManageExperimentComponent
      },
      {
        path: 'create',
        component: CreateExperimentComponent
      },
      {
        path: 'experiment',
        component: RunningExperimentComponent
      },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ExperimentComponent,
    CreateExperimentComponent,
    ManageExperimentComponent,
    RunningExperimentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
