import { InitialStateType, ProductActions, Types } from "./models/reducerTypes";

export const productReducer = (state: InitialStateType, action: ProductActions) => {
  switch (action.type) {
    case Types.Add:
      return {
        ...state,
        products: [...state.products, action.payload],
        total : state.total + action.payload.price
      }
    default:
      return state;
  }
};
