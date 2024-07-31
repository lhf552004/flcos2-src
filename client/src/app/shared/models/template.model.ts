import {TemplateGroup} from './template-group.model';

export interface Template {
  id: string;
  name: string;
  comment: string;
  templateType: string;
  valid: boolean;
  matcherValid: boolean;
  graphics: string;
  parent: Template;
  group: TemplateGroup;
  variants: Template[];
  selector: any;
  leadTime: string;
  nextId: string;
}
