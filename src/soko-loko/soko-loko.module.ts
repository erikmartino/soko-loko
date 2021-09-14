import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SokoLokoComponent } from './soko-loko.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [SokoLokoComponent],
  bootstrap: [SokoLokoComponent],
  exports: [SokoLokoComponent]
})
export class SokoLokoModule {}
