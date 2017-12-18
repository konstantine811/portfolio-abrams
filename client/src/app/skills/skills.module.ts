import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SharedCoreModule } from '../core/shared.core.module';

import { SkillsComponent } from './skills.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedCoreModule
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule { }
