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
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
];
