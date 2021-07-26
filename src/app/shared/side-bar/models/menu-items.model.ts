import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface MenuItem {
  id: string;
  label: string;
  icon: IconDefinition;
  active?: boolean;
  route?: string[];
  children: MenuItem[];
}