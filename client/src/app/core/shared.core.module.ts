import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaAttrDirective } from './directives/attr.directives';

import { DeviceInfoService } from './services/device-info.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaAttrDirective
  ],
  providers: [ DeviceInfoService ],
  exports: [
    PaAttrDirective
  ]
})
export class SharedCoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedCoreModule,
      providers: [ PaAttrDirective ]
    };
  }
}
