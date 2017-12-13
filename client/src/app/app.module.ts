import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { SkillsModule } from './skills/skills.module';
import { PortfolioModule } from './portfolio/portfolio.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    SkillsModule,
    PortfolioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
