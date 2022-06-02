import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';
import {Recipe} from '../models/recipe.model';
import {Ingredient} from '../models/ingredient.model';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {SimpleBase} from '../models/simple-base.model';
import {ProductsService} from '../services/products.service';
import {LinesService} from '../services/lines.service';
import {combineLatest, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'flcos-recipe-viewer',
  templateUrl: './recipe-viewer.component.html',
  styleUrls: ['./recipe-viewer.component.scss']
})
export class RecipeViewerComponent implements OnInit, OnChanges, OnDestroy {

  @Input() config: {
    recipe: Recipe,
  };

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  // Indicate roles selected
  itemsSelected = false;

  // Can recipe's name, line, product be edited
  canModified = false;

  // Recipe's name
  name = '';

  // ALl products which only contain id and name
  products: SimpleBase[] = [];
  // ALl lines which only contain id and name
  lines: SimpleBase[] = [];

  // The product of the recipe
  selectedProduct: SimpleBase;
  // The line of the recipe
  selectedLine: SimpleBase;

  // The datatable settings
  settings: DataTableSettings;

  // Ingredient list
  ingredients: Ingredient[] = [];
  isAdmin = true;
  selectedItems: any[] = [];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private productService: ProductsService, private lineService: LinesService) {
  }

  ngOnInit(): void {
    if (this.config.recipe) {
      this.name = this.config.recipe.name;
      this.canModified = this.config.recipe.template;
      this.selectedProduct = this.config.recipe.product;
      this.selectedLine = this.config.recipe.line;
      if (this.config.recipe.ingredients) {
        this.ingredients = this.config.recipe.ingredients;
      }
      if (this.canModified) {
        const observables: Observable<any>[] = [this.productService.getSimpleAll(), this.lineService.getSimpleAll()];
        combineLatest(observables).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
          this.products = x[0];
          this.lines = x[1];
        });
      }
    }
    console.log(this.ingredients);
    this.buildTableSettings();
  }

  ngOnChanges(): void {
    this.buildTableSettings();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


  buildTableSettings(): void {
    this.settings = {
      selectableRows: true,
      columnDefinitions: this.getColumnDefinitions(),
      data: this.ingredients,
      toolBar: {
        left: [],
        right: [
          ...this.isAdmin && this.config.recipe.template ? [{
            name: 'Add Recipe',
            type: 'button',
            icon: faPlus,
            callback: this.create.bind(this)
          } as DataTableToolbarControl] : [],
          {type: 'filter'} as DataTableToolbarControl
        ]
      },
      groupBy: []
    };
  }

  selectItems(rows: any[]) {
    this.selectedItems = this.ingredients.filter(r => rows.map(x => x.data.id).includes(r.id));
    if (this.selectedItems.length > 0) {
      this.itemsSelected = true;
    } else {
      this.itemsSelected = false;
    }
  }

  submitForm(method: string) {
    this.submitted.emit(this.selectedItems);
  }

  dismissForm(method: string) {
    this.dismissed.emit(method);
  }

  getColumnDefinitions(): DataTableColumnDefinition[] {
    return [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'product.name', label: 'Product', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'sender.name', label: 'Sender', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'receiver.name', label: 'Receiver', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {
        id: '4',
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

  view(ingredient: Ingredient) {

  }

  delete(ingredient: Ingredient) {
  }

  create() {

  }

  compareFn(a: SimpleBase, b: SimpleBase) {
    return a && b && a.id === b.id;
  }

}
