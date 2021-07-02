import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdministrationComponent } from './view-administration.component';

describe('ViewAdministrationComponent', () => {
  let component: ViewAdministrationComponent;
  let fixture: ComponentFixture<ViewAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
