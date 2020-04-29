import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  exports: [
    A11yModule,
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class MaterialModule {}