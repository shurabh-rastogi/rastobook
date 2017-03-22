import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { postRoutes } from './post.route';
import { ViewPostComponent } from './components/view-post/view-post.component';

@NgModule({
    declarations: [
      ViewPostComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(postRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class PostModule { }
