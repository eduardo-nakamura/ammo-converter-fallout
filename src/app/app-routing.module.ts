import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AmmoManageComponent} from './ammo-manage/ammo-manage.component'

const routes: Routes = [
  { path: 'ammo', component: AmmoManageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
