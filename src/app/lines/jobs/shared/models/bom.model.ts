import { Ingredient } from './ingredient.model';

export class Bom {
    id: string;
    name: string;
    isTemplate: boolean;
    ingredents: Ingredient[];
}