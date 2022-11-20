import { CourseIcon, ProductIcon, ServiceIcon, BookIcon, } from '../assets/image/icons';
import { IFirstLevelMenuItem } from '../interfaces/menu.interface';
import { ITopLevelCategory } from '../interfaces/page.interface';


export const firstLevelMenu: IFirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: ITopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServiceIcon />, id: ITopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BookIcon />, id: ITopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductIcon />, id: ITopLevelCategory.Products },
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');