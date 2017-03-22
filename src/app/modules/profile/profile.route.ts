import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';

export const profileRoutes: Routes = [
  { 
    path: '', 
    component: ViewProfileComponent 
  }
];
