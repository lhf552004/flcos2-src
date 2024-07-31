import {SchemeFieldAttribute} from './scheme-field-attribute.model';

export interface SchemeField {
  id: string;
  name: string;
  fullName: string;
  unit: string;
  type: string;
  scheme: string;
  fields: SchemeField[];
  // This is the attributes for this field
  attributes: SchemeFieldAttribute[];
}
