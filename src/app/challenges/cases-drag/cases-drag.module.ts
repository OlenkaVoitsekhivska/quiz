import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesDragComponent } from './cases-drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CasesDragComponent],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild([{ path: '', component: CasesDragComponent }]),
  ],
})
export class CasesDragModule {}
