import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedService } from './services/share.service';

import { AppHeaderComponent } from './components/app-header.component';

@NgModule({
  declarations: [
        AppHeaderComponent
    ],
  exports: [ 
      AppHeaderComponent 
    ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedService]
    };
  }
}