import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AuthGuard } from '../../core/guards/auth.guard';
import { Dashboard } from './components/dashboard/dashboard';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user',
        component: UserList,
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [AuthGuard]
      },
      {
        path: 'cart',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4204/remoteEntry.js',
            exposedModule: './CartModule',
          }).then((m) => m.CartModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'user-preference',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4210/remoteEntry.js',
            exposedModule: './UserPreferenceModule',
          }).then((m) => m.UserPreferenceModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserList,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'cart',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        exposedModule: './CartModule',
      }).then((m) => m.CartModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
