import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  exports: [
    A11yModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class MaterialModule {}