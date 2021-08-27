import {Attribute} from './attribute.model';
import {Template} from './template.model';

export interface Order {
  id: string;
  status: string;
  lastChange: string;
  internalOrder: boolean;
  attributes: {
    key: string,
    attribute: Attribute
  }[];
  template: Template;
}
