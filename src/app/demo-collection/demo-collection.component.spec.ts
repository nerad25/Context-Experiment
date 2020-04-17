import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCollectionComponent } from './demo-collection.component';

describe('DemoCollectionComponent', () => {
  let component: DemoCollectionComponent;
  let fixture: ComponentFixture<DemoCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
