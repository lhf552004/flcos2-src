import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from './side-bar/side-bar.component';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {WorkFlowComponent} from './workflow/work-flow/work-flow.component';
import {DynamicFormModule} from 'dynamic-form';
import { DataTableModule } from 'data-table';

@NgModule({
  declarations: [SideBarComponent, WorkFlowComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgbPopoverModule,
    DynamicFormModule,
    DataTableModule
  ],
  exports: [
    SideBarComponent,
    WorkFlowComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgbPopoverModule,
    DynamicFormModule,
    DataTableModule
  ]
})
export class SharedModule {
}
