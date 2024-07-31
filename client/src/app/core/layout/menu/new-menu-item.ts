import {Role} from '../../user/models/role.model';

export interface NewMenuItem {
  name: string;
  url: string;
  role?: Role;
  index: number;
  external?: boolean;
  externalUrl?: string;
  iconName: string;
  isRoot: boolean;
}
