import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpaManagerComponent } from './cpa-manager/cpa-manager.component';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { TagManagerComponent } from './tag-manager/tag-manager.component';
import { ContractReferenceManagerComponent} from './contract-reference-manager/contract-reference-manager.component';
import { CoreComponent } from './core/core.component';


const routes: Routes = [
  {path: 'cpa-manager', component: CpaManagerComponent},
  {path: 'tag-manager', component: TagManagerComponent},
  {path: 'contract-manager', component: ContractReferenceManagerComponent},
  {path: 'home', component: CoreComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
