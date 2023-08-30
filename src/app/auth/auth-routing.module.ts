import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paths } from './data/paths';

@NgModule({
  imports: [RouterModule.forChild(paths)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
