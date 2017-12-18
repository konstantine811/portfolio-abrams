import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule} from '../shared/shared.module';
import { SharedCoreModule } from '../core/shared.core.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedCoreModule
  ],
  declarations: [ 
    HomeComponent
  ]
})
export class HomeModule { }
