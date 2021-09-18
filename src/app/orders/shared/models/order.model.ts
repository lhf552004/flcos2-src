import {OrderAttribute} from './order-attribute.model';
import {Template} from '../../../shared/models/template.model';

export interface Order {
  id: string;
  status: string;
  lastChange: string;
  internalOrder: boolean;
  attributes: {
    [key: string]: OrderAttribute
  };
  template: Template;
}
