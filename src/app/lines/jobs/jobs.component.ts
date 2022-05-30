import {Component} from '@angular/core';
import {DataTableColumnDefinition} from 'data-table';

import {CustomValidators, DynamicFormService} from 'dynamic-form';
import {BaseObjectsComponent} from '../../shared/base-objects.component';
import {Job} from '../../shared/models/job.model';
import {FieldConfig} from 'dynamic-form/lib/models/field-config.interface';
import {JobService} from '../shared/job.service';
import {RecipeService} from '../shared/recipe.service';
import {Recipe} from '../../shared/models/recipe.model';
import {LineService} from '../shared/line.service';
import {ProductsService} from '../../shared/services/products.service';

@Component({
  selector: 'flcos-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent extends BaseObjectsComponent<Job> {
  private productService: ProductsService;
  private recipeService: RecipeService;
  private lineService: LineService;

  constructor(productService: ProductsService,
              lineService: LineService,
              recipeService: RecipeService,
              jobService: JobService,
              dynamicFormService: DynamicFormService) {
    super(jobService, dynamicFormService);
    this.productService = productService;
    this.recipeService = recipeService;
    this.lineService = lineService;
  }

  getColumnDefinitions(): DataTableColumnDefinition[] {
    return [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'status', label: 'Status', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'isProduction', label: 'Is Production', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {
        id: '5',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.view.bind(this)
      },
      {
        id: '6',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.delete.bind(this)
      },
    ];
  }

  getDefaultProperties(): any {
    return {status: 'Created'};
  }

  getFields(): FieldConfig[] {
    const recipes = this.recipeService.allTemplates$.getValue() as Recipe[];
    return [
      {
        type: 'select',
        label: 'Recipe',
        name: 'recipe',
        placeholder: 'Select a recipe',
        options: recipes.map(c => ({
          key: c,
          value: c.name + '-' + c.line?.name
        })),
        validation: []
      }
    ];
  }

  getHeaderForDelete(): string {
    return 'Confirm to delete the Job';
  }

  getHeaderForNew(): string {
    return 'Create a Job';
  }

  getHeaderForView(): string {
    return 'View the Job';
  }

  getObjectTypeName(): string {
    return 'Job';
  }

  doCreate(newObject: any): void {
    newObject.line = this.lineService.line$.getValue();
    super.doCreate(newObject);
  }
}
