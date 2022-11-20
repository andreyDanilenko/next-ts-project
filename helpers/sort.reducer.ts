import { SortEnum } from "../components/Sort/Sort.props";
import { IProductModel } from "../interfaces/product.interface";

export type SortActions = { type: SortEnum.Price }  | { type: SortEnum.Rating};
export interface ISortReducerState { sort: SortEnum;  products: IProductModel[] }

export const sortReducer = (state: ISortReducerState, action: SortActions ): ISortReducerState => {
   switch(action.type) {
     case SortEnum.Rating:
        return {
           sort: SortEnum.Rating,
           products: state.products.sort((a, b)=> a.initialRating > b.initialRating ? -1 : 1)           
        };
     case SortEnum.Price:
        return {
           sort: SortEnum.Price,
           products: state.products.sort((a, b)=> a.price > b.price ? -1 : 1)           
        };
     default: 
        throw new Error('Invalid sort type');   
   }
};
