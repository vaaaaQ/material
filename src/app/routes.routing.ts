import { Routes, RouterModule } from '@angular/router';
import { SubscribersListComponent } from './subscribers/subscribers-list/subscribers-list.component';

const routes: Routes = [
  {
    path: '', component: SubscribersListComponent
  },
  {
    path: 'subscribers', component: SubscribersListComponent
  }
];

export const Routing = RouterModule.forRoot(routes);
