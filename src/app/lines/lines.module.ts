import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { LinesComponent } from './lines/lines.component';
import { LineComponent } from './line/line.component';
import { SharedModule } from '../shared/shared.module';
import { LinesRoutingModule } from './lines-routing.module';
import { LineDefaultComponent } from './line-default/line-default.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LineDetailsComponent } from './line-details/line-details.component';


@NgModule({
  declarations: [LinesComponent, LineComponent, LineDefaultComponent, LineDetailsComponent],
  imports: [
    SharedModule,
    LinesRoutingModule,
    InlineSVGModule.forRoot(),
    NgbDropdownModule
  ]
})
export class LinesModule { }
