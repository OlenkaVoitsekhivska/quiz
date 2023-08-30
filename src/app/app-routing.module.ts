import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appPaths } from './core/data/paths';

@NgModule({
  imports: [RouterModule.forRoot(appPaths)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
