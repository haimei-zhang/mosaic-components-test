import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagManagerComponent } from './tag-manager.component';

@NgModule({
  declarations: [TagManagerComponent],
  imports: [
    CommonModule
  ],
  exports: [TagManagerComponent]
})
export class TagManagerModule { }
