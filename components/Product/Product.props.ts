import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProductModel } from '../../interfaces/product.interface';

export interface IProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: IProductModel;
}