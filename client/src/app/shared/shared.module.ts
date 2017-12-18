import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RouterModule } from '@angular/router';
import { SocialLinkComponent } from './social-link/social-link.component';
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavComponent, ProgressBarComponent, SocialLinkComponent],
  exports: [NavComponent, ProgressBarComponent, SocialLinkComponent]
})
export class SharedModule {}
