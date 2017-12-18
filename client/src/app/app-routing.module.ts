import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRouter: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  ]
@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule]
})

export class AppRoutingModule { }