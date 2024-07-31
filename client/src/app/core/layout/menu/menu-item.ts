import {NewMenuItem} from './new-menu-item';

export interface MenuItem extends NewMenuItem{
  id: string;
  children: MenuItem[];
}
