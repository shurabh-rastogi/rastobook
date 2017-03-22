import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RastoBookLoginGuard } from './modules/shared/guards/auth.guard';

export const appRoutes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'profile',
    canActivate: [RastoBookLoginGuard],
    loadChildren: 'app/modules/profile/profile.module#ProfileModule'
  },
  {
    path: 'posts',
    canActivate: [RastoBookLoginGuard],
    loadChildren: 'app/modules/post/post.module#PostModule'
  },
  { 
    path: 'photos',
    canActivate: [RastoBookLoginGuard],
    loadChildren: 'app/modules/photo/photo.module#PhotoModule'
  },
  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }/*,
  { 
    path: '**', component: 
    PageNotFoundComponent 
  }*/
];
