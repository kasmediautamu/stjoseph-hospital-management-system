import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAdministrationWizardComponent } from './filter-administration-wizard.component';

describe('FilterAdministrationWizardComponent', () => {
  let component: FilterAdministrationWizardComponent;
  let fixture: ComponentFixture<FilterAdministrationWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAdministrationWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAdministrationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
