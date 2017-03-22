import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { profileRoutes } from './profile.route';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewProfileService } from './services/view-profile-service.service';

@NgModule({
  declarations: [
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ],
  providers: [
    ViewProfileService
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [
    ViewProfileComponent
  ],
})
export class ProfileModule { }
