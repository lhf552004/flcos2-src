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
import { ItemsSelectorComponent } from './items-selector/items-selector.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [SideBarComponent, WorkFlowComponent, ItemsSelectorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgbPopoverModule,
    DynamicFormModule,
    DataTableModule,
    TranslateModule
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
    DataTableModule,
    TranslateModule
  ]
})
export class SharedModule {
}
