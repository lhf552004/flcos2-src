import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinsComponent } from './bins/bins.component';
import { SharedModule } from '../shared/shared.module';
import { BinsRoutingModule } from './bins-routing.module';
import { BinComponent } from './bin/bin.component';
import { BinDefaultComponent } from './bin-default/bin-default.component';



@NgModule({
  declarations: [BinsComponent, BinComponent, BinDefaultComponent],
  imports: [
    SharedModule,
    BinsRoutingModule
  ]
})
export class BinsModule { }
