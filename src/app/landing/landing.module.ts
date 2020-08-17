import { NgModule } from "@angular/core";
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LandingComponent],
    imports: [CommonModule, LandingRoutingModule, FontAwesomeModule],
})
export class LandingModule {}