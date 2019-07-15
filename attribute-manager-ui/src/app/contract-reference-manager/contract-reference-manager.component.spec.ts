import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReferenceManagerComponent } from './contract-reference-manager.component';

describe('ContractReferenceManagerComponent', () => {
  let component: ContractReferenceManagerComponent;
  let fixture: ComponentFixture<ContractReferenceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractReferenceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractReferenceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
