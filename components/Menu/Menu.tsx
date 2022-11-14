import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { IFirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import { CourseIcon, ProductIcon, ServiceIcon, BookIcon, } from '../../assets/image/icons';
import styles from './Menu.module.css';
import { ITopLevelCategory } from '../../interfaces/page.interface';



const firstLevelMenu: IFirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: ITopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServiceIcon />, id: ITopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BookIcon />, id: ITopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductIcon />, id: ITopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{firstLevelMenu.map(menuItem => (
					<li key={menuItem.route}>
						<Link href={`/${menuItem.route}`}>
							<a>
								<div className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: menuItem.id === firstCategory
								})}>
									{menuItem.icon}
									<span>{menuItem.name}</span>
								</div>
							</a>
						</Link>
						{menuItem.id === firstCategory && buildSecondLevel(menuItem)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
		return (
			<ul className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (<li key={m._id.secondCategory}>
						<div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</li>
					);
				})}
			</ul >
		);
	};

	const buildThirdLevel = (pages: IPageItem[], route: string) => {
		return (
			pages.map(page => (
				<Link href={`/${route}/${page.alias}`} key={page._id}>
					<a className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
					})}>
						{page.category}
					</a>
				</Link>

			))
		);
	};

	return (
		<nav className={styles.menu}>
			{buildFirstLevel()}
		</nav>
	);
};