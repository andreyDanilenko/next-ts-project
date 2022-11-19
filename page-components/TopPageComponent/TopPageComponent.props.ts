import { ITopLevelCategory, ITopPageModel } from "../../interfaces/page.interface";
import { IProductModel } from "../../interfaces/product.interface";

export interface ITopPageComponentProps {
    firstCategory: ITopLevelCategory;
    page: ITopPageModel;
    products: IProductModel[]
  }
  