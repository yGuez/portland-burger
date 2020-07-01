export enum Types {
  Add = "ADD_PRODUCT",
}

export type ProductType = {
  type: number;
  title: string;
  description: number;
  price: number
};

export type InitialStateType = {
  products: ProductType[],
  total: number
}

export type ProductActions = {
  type: Types.Add;
  payload: {
    type: number;
    title: string;
    description: number;
    price: number
  };
}