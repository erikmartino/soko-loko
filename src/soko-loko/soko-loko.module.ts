import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SokoLokoComponent } from './soko-loko.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SokoLokoComponent],
  bootstrap: [SokoLokoComponent],
  exports: [SokoLokoComponent]
})
export class SokoLokoModule {}
