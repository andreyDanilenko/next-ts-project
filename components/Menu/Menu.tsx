import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { IFirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import { CourseIcon, ProductIcon, ServiceIcon, BookIcon, } from '../../assets/image/icons';
import styles from './Menu.module.css';
import { ITopLevelCategory } from '../../interfaces/page.interface';
import cn from 'classnames';

const firstLevelMenu: IFirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: ITopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServiceIcon />, id: ITopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BookIcon />, id: ITopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductIcon />, id: ITopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{firstLevelMenu.map(menuItem => (
					<li key={menuItem.route}>
						<a href={`/${menuItem.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: menuItem.id === firstCategory
							})}>
								{menuItem.icon}
								<span>{menuItem.name}</span>
							</div>
						</a>
						{menuItem.id === firstCategory && buildSecondLevel(menuItem)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
		return (
			<ul className={styles.secondBlock}>
				{menu.map(m => (
					<li key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</li>
				))}
			</ul >
		);
	};

	const buildThirdLevel = (pages: IPageItem[], route: string) => {
		return (
			pages.map(page => (
				<a href={`/${route}/${page.alias}`} key={page._id} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})}>
					{page.category}
				</a>
			))
		);
	};

	return (
		<nav className={styles.menu}>
			{buildFirstLevel()}
		</nav>
	);
};