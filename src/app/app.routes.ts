import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './modules/biography/biography.module#BiographyModule'
  },
  { path: '**',  redirectTo: '', pathMatch: 'full' }

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);

