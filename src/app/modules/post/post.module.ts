import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/share.module';

import { postRoutes } from './post.route';
import { ViewPostComponent } from './components/view-post/view-post.component';

@NgModule({
    declarations: [
      ViewPostComponent
    ],
    imports: [
      CommonModule,
      SharedModule, 
      RouterModule.forChild(postRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class PostModule { }
