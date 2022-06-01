import { Component } from '@angular/core';
import {BaseObjectsComponent} from '../../shared/base-objects.component';
import {Recipe} from '../../shared/models/recipe.model';
import {RecipeService} from '../shared/recipe.service';
import { DynamicFormService } from 'dist/dynamic-form';
import { DataTableColumnDefinition } from 'dist/data-table';
import {LinesService} from '../shared/lines.service';
import {ProductsService} from '../../shared/services/products.service';
import {takeUntil} from 'rxjs/operators';
import {RecipeViewerComponent} from '../../shared/recipe-viewer/recipe-viewer.component';

@Component({
  selector: 'flcos-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent extends BaseObjectsComponent<Recipe> {
  private lineService: LinesService;
  private productService: ProductsService;

  constructor(recipeService: RecipeService,
              lineService: LinesService,
              productService: ProductsService,
              dynamicFormService: DynamicFormService) {
    super(recipeService, dynamicFormService);
    this.lineService = lineService;
    this.productService = productService;
  }

  getColumnDefinitions(): DataTableColumnDefinition[] {
    return [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'line.name', label: 'Line', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {
        id: '4',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewRecipe.bind(this)
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

  getFields(): any[] {
    const lines = this.lineService.simpleObjects$.getValue();
    const products = this.productService.simpleObjects$.getValue();
    return [
      {
        type: 'input',
        label: 'Name',
        name: 'name',
        placeholder: 'Set the name',
        validation: []
      },
      {
        type: 'select',
        label: 'Line',
        name: 'line',
        placeholder: 'Select the line',
        options: lines.map(c => ({
          key: c,
          value: c.name
        })),
        validation: []
      },
      {
        type: 'select',
        label: 'Product',
        name: 'product',
        placeholder: 'Select a product',
        options: products.map(c => ({
          key: c,
          value: c.name
        })),
        validation: []
      }
    ];
  }

  getHeaderForDelete(): string {
    return 'Confirm to delete the Recipe';
  }

  getHeaderForNew(): string {
    return 'Create a Recipe';
  }

  getHeaderForView(): string {
    return 'View the Recipe';
  }

  getObjectTypeName(): string {
    return 'Recipe';
  }

  doCreate(newObject: Recipe): void {
    newObject.template = true;
    newObject.line = {id: newObject.line.id, name: newObject.line.name};
    super.doCreate(newObject);
  }

  viewRecipe(recipe: Recipe) {
    this.genericBaseService.get(recipe.id).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      const config = {
        recipe: x,
        right: [],
        onSubmit: () => {
        },
        onDismiss: (e: string) => {
        }
      };
      this.dynamicFormService.popModal(RecipeViewerComponent, config);
    });
  }
}
