import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaAttrDirective } from './directives/attr.directives';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaAttrDirective
  ],
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
