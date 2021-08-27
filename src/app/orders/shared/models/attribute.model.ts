export interface Attribute {
  id: string;
  name: string;
  type: string;
  string_value?: string;
  numericValue?: string;
  timeValue?: string;
  suffix: string;
  attributes: {
    key: string,
    attribute: Attribute
  }[];
}
