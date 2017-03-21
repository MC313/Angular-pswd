import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordService } from '../password/password.service';
import { PasswordResultService} from '../password/password-result.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})

export class CoreModule
{

  constructor( @Optional() @SkipSelf() parentModule: CoreModule)
  {
    if (parentModule)
    {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      )
    }
  }

  static forRoot(): ModuleWithProviders 
  {
    return {
      ngModule: CoreModule,
      providers: [
        PasswordService,
        PasswordResultService
      ]
    };
  }
}
