import {SchemeField} from './scheme-field.model';

export interface Scheme {
  id: string;
  schemeName: string;
  builtin: boolean;
  primitiv: boolean;
  description: string;
  fields: SchemeField[];
}
