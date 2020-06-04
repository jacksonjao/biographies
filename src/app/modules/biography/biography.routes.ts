import {RouterModule, Routes} from '@angular/router';
import {BiographyComponent} from './biography.component';
import {BiographyDetailComponent} from './pages/biography-detail/biography-detail.component';

const ROUTES: Routes = [
  {
    path: '',
    component: BiographyComponent,
    children: [
      {
        path: ':id',
        component: BiographyDetailComponent
      }
    ]
  }

];

export const BIOGRAPHY_ROUTING = RouterModule.forChild(ROUTES);

