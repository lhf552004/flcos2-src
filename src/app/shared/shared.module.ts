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
import { TreeViewModule } from 'tree-view';
import { ItemsSelectorComponent } from './items-selector/items-selector.component';
import {TranslateModule} from '@ngx-translate/core';
import { StickyPopoverDirective } from './side-bar/sticky-popover.directive';

@NgModule({
  declarations: [SideBarComponent, WorkFlowComponent, ItemsSelectorComponent, StickyPopoverDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgbPopoverModule,
    DynamicFormModule,
    DataTableModule,
    TranslateModule,
    TreeViewModule
  ],
  exports: [
    SideBarComponent,
    WorkFlowComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgbPopoverModule,
    DataTableModule,
    DynamicFormModule,
    TranslateModule
  ]
})
export class SharedModule {
}
