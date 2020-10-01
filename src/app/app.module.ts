import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentEditorComponent } from './experiment-editor/experiment-editor.component';
import { InformationVerificationComponent } from './information-verification/information-verification.component';
import { SubmitDataComponent } from './submit-data/submit-data.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ExperimentEditorComponent,
    InformationVerificationComponent,
    SubmitDataComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
