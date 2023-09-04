import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesDragComponent } from './cases-drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CasesDragComponent],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild([{ path: '', component: CasesDragComponent }]),
    SharedModule,
  ],
})
export class CasesDragModule {}
