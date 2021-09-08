import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RouterModule } from '@angular/router';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';



@NgModule({
  declarations: [
    MainNavigationComponent,
    MainFooterComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    MainNavigationComponent,
    MainFooterComponent,
    NavMenuComponent
  ]
})
export class SharedModule { }
