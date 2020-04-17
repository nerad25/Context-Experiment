import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingComponent implements OnInit {

  faBrain=faBrain;

  constructor(public router: Router) { 
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  onTabClick(route: string) {
    this.router.navigate([route]);
  }

}
