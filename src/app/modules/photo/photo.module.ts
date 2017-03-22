import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { photoRoutes } from './photo.route';
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';

@NgModule({
    declarations: [
      ViewPhotoComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(photoRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class PhotoModule { }
