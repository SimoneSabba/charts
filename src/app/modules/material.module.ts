import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  exports: [
    A11yModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {}