import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './components/home/home-view.component';
import { SeriesService } from './services/series.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './components/+lazy/lazy.module#LazyModule'},
      { path: 'series', loadChildren: './components/series/series.module#SeriesModule'}
    ])
  ],
  declarations: [ AppComponent, HomeView],
  providers: [
    SeriesService
  ],
  exports: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {}
