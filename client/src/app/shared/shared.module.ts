import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, ProgressBarComponent],
  exports: [NavComponent, ProgressBarComponent]
})
export class SharedModule {}
