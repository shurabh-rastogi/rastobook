import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedService } from './services/share.service';

import { AppHeaderComponent } from './components/header/app-header.component';

@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  imports: [
    CommonModule
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