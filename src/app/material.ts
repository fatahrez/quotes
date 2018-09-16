import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]

})

export class MaterialModule { }