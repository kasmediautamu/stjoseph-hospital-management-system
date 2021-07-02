import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionDirective } from './select-option.directive';
import { SelectComponent } from './select.component';
import { DropdownModule } from '../directives/dropdown/dropdown.module';



@NgModule({
  declarations: [
      SelectComponent,
      SelectOptionDirective,

   ],
  imports: [
    CommonModule,
    DropdownModule,
  ],
  exports:[
    SelectComponent
  ]
})

export class SelectModule { }
