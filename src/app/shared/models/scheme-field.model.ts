import {SchemeFieldAttribute} from './scheme-field-attribute.model';

export interface SchemeField {
  id: string;
  fieldName: string;
  unit: string;
  type: string;
  fields: SchemeField[];
  // This is the attributes for this field
  attributes: SchemeFieldAttribute[];
}
