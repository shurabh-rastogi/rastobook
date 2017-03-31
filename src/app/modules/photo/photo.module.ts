import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/share.module';

import { photoRoutes } from './photo.route';
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';

@NgModule({
    declarations: [
      ViewPhotoComponent
    ],
    imports: [
      CommonModule,
      SharedModule, 
      RouterModule.forChild(photoRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class PhotoModule { }
