import {Role} from '../../user/models/role.model';

export interface MenuItem {
  id: string;
  name: string;
  url: string;
  role?: Role;
}
