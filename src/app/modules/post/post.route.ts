import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './components/view-post/view-post.component';

export const postRoutes: Routes = [
  { 
    path: '', 
    component: ViewPostComponent 
  }
];
