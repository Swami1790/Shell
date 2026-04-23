import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Routes',
      }).then(m => m.routes),
  },
  {
  path: 'courses',
  loadChildren: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Routes',
    }).then(m => m.routes),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        exposedModule: './AuthModule',
      }).then((m) => m.AuthModule),
  },
  // {
  //   path: 'cart',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4204/remoteEntry.js',
  //       exposedModule: './CartModule',
  //     }).then((m) => m.CartModule),
  // },
  {
    path: 'view',
    loadChildren: () =>
      import('./feature/dashboard/dashboard-module').then((m) => m.DashboardModule),
  },
  {
    path: 'react-app',
    loadComponent: () =>
      import('./feature/react-wrapper/react-wrapper').then((m) => m.ReactWrapper),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
