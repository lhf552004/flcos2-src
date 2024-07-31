import { NgModule } from '@angular/core';
import {ReceiptsRoutingModule} from './receipts-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ReceiptsComponent } from './receipts/receipts.component';

@NgModule({
  declarations: [ReceiptsComponent],
  imports: [
    SharedModule,
    ReceiptsRoutingModule
  ]
})
export class ReceiptsModule { }
