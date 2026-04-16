import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list';

const routes: Routes = [
  {
    path: 'user',
    component: UserList
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'user'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
