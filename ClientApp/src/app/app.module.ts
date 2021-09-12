import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BootstrapHomeComponent } from './bootstrap-ship/bootstrap-home/bootstrap-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',   component : HomeComponent, pathMatch: 'full' },
      {
        path: 'shared',
        loadChildren: () => import('./shared/shared.module').then(i => i.SharedModule)
      },
      {
        path: 'escape',
        loadChildren: () => import('./escape/escape.module').then(i => i.EscapeModule)
      },
      {
        path: 'bootstrap-ship',
        loadChildren: () => import('./bootstrap-ship/bootstrap.module').then(i => i.BootstrapModule)
      },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: '**',   redirectTo: '', pathMatch: 'full' },
], { relativeLinkResolution: 'legacy' }),
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
