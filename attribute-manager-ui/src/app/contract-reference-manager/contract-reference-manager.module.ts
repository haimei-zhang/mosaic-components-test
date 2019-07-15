import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractReferenceManagerComponent } from './contract-reference-manager.component';

@NgModule({
  declarations: [ContractReferenceManagerComponent],
  imports: [
    CommonModule
  ],
  exports: [ContractReferenceManagerComponent]
})
export class ContractReferenceManagerModule { }
