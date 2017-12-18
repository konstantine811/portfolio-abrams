import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { SharedCoreModule } from '../core/shared.core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedCoreModule
  ],
  declarations: [ 
    PortfolioComponent ]
})
export class PortfolioModule { }
