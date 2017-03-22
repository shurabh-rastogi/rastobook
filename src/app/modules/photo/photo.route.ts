import { RouterModule, Routes } from '@angular/router';
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';

export const photoRoutes: Routes = [
  { 
    path: '', 
    component: ViewPhotoComponent 
  }
];
