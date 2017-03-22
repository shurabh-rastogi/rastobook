import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.route';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './modules/shared/share.module';
import { RastoBookLoginGuard } from './modules/shared/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SharedModule.forRoot()
  ],
  providers: [
    RastoBookLoginGuard
  ],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
