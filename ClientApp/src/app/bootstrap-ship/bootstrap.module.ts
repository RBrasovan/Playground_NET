import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapHomeComponent } from './bootstrap-home/bootstrap-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BootstrapHomeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: BootstrapHomeComponent },
    ])
  ],

})
export class BootstrapModule {

 }
