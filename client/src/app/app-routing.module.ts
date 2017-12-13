import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'skills',
            component: SkillsComponent
        },
        {
            path: 'portfolio',
            component: PortfolioComponent
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        }
    ])],
    exports: [RouterModule]
})

export class AppRoutingModule { }