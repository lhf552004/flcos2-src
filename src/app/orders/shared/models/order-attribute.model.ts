export interface OrderAttribute {
  id: string;
  name: string;
  type: string;
  string_value?: string;
  numericValue?: string;
  timeValue?: string;
  value?: any;
  suffix: string;
  attributes: {
    [key: string]: OrderAttribute
  };
}
