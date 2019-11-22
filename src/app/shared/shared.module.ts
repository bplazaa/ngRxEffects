import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeadComponent } from './nav-head/nav-head.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [NavHeadComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavHeadComponent
  ]

})
export class SharedModule { }
